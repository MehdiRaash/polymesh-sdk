import BigNumber from 'bignumber.js';

import { Asset, Context, Entity, setMetadata } from '~/internal';
import { ProcedureMethod, SetMetadataParams } from '~/types';
import {
  bigNumberToU64,
  bytesToString,
  meshMetadataSpecToMetadataSpec,
  meshMetadataValueToMetadataValue,
  metadataToMeshMetadataKey,
  stringToTicker,
} from '~/utils/conversion';
import { createProcedureMethod, toHumanReadable } from '~/utils/internal';

import { MetadataDetails, MetadataType, MetadataValue } from './types';

export interface UniqueIdentifiers {
  id: BigNumber;
  ticker: string;
  type: MetadataType;
}

export interface HumanReadable {
  id: string;
  ticker: string;
  type: MetadataType;
}

/**
 * Represents an Asset MetadataEntry in the Polymesh blockchain
 */
export class MetadataEntry extends Entity<UniqueIdentifiers, HumanReadable> {
  /**
   * identifier number of the MetadataEntry
   */
  public id: BigNumber;

  /**
   * Asset for which this is the metadata
   */
  public asset: Asset;

  /**
   * Type of metadata represented by this instance
   */
  public type: MetadataType;

  /**
   * @hidden
   * Check if a value is of type {@link UniqueIdentifiers}
   */
  public static override isUniqueIdentifiers(identifier: unknown): identifier is UniqueIdentifiers {
    const { id, ticker, type } = identifier as UniqueIdentifiers;

    return id instanceof BigNumber && typeof ticker === 'string' && type in MetadataType;
  }

  /**
   * @hidden
   */
  public constructor(identifiers: UniqueIdentifiers, context: Context) {
    super(identifiers, context);

    const { id, ticker, type } = identifiers;

    this.id = id;
    this.asset = new Asset({ ticker }, context);
    this.type = type;

    this.set = createProcedureMethod(
      { getProcedureAndArgs: args => [setMetadata, { ...args, metadataEntry: this }] },
      context
    );
  }

  /**
   * Assign a new list of documents to the Asset by replacing the existing list of documents with the ones passed in the parameters
   *
   * This requires two transactions
   */
  public set: ProcedureMethod<SetMetadataParams, MetadataEntry>;

  /**
   * Retrieve name and specs for this Asset MetadataEntry
   */
  public async details(): Promise<MetadataDetails> {
    const {
      context: {
        polymeshApi: {
          query: {
            asset: {
              assetMetadataLocalKeyToName,
              assetMetadataLocalSpecs,
              assetMetadataGlobalKeyToName,
              assetMetadataGlobalSpecs,
            },
          },
        },
      },
      id,
      asset: { ticker },
      type,
      context,
    } = this;

    const rawId = bigNumberToU64(id, context);
    const rawTicker = stringToTicker(ticker, context);

    let rawName, rawSpecs;
    if (type === MetadataType.Local) {
      [rawName, rawSpecs] = await Promise.all([
        assetMetadataLocalKeyToName(rawTicker, rawId),
        assetMetadataLocalSpecs(rawTicker, rawId),
      ]);
    } else {
      [rawName, rawSpecs] = await Promise.all([
        assetMetadataGlobalKeyToName(rawId),
        assetMetadataGlobalSpecs(rawId),
      ]);
    }

    return {
      name: bytesToString(rawName.unwrap()),
      specs: meshMetadataSpecToMetadataSpec(rawSpecs),
    };
  }

  /**
   * Retrieve the MetadataEntry's details
   */
  public async value(): Promise<MetadataValue | null> {
    const {
      context: {
        polymeshApi: {
          query: {
            asset: { assetMetadataValues, assetMetadataValueDetails },
          },
        },
      },
      id,
      type,
      asset: { ticker },
      context,
    } = this;

    const rawMetadataKey = metadataToMeshMetadataKey(type, id, context);
    const rawTicker = stringToTicker(ticker, context);

    const [rawValue, rawValueDetails] = await Promise.all([
      assetMetadataValues(rawTicker, rawMetadataKey),
      assetMetadataValueDetails(rawTicker, rawMetadataKey),
    ]);

    return meshMetadataValueToMetadataValue(rawValue, rawValueDetails);
  }

  /**
   * Determine whether this MetadataEntry exists on chain
   */
  public async exists(): Promise<boolean> {
    return true;
  }

  /**
   * Return the MetadataEntry's ID, Asset ticker and Metadata type
   */
  public toHuman(): HumanReadable {
    const { asset, id, type } = this;

    return toHumanReadable({
      ticker: asset,
      id,
      type,
    });
  }
}
