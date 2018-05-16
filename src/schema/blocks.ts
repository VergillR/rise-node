// tslint:disable object-literal-sort-keys
import constants from '../helpers/constants';
import rawBlock from './logic/rawBlock';

export default {
  loadBlocksFromPeer: {
    id  : 'blocks.loadBlocksFromPeer',
    type: 'array',
    items: rawBlock,
  },
  getBlock          : {
    id        : 'blocks.getBlock',
    type      : 'object',
    properties: {
      id: {
        type     : 'string',
        format   : 'id',
        minLength: 1,
        maxLength: 20,
      },
    },
    required  : ['id'],
  },
  getBlocks         : {
    id        : 'blocks.getBlocks',
    type      : 'object',
    properties: {
      limit             : {
        type   : 'integer',
        minimum: 1,
        maximum: 100,
      },
      orderBy           : {
        type: 'string',
      },
      offset            : {
        type   : 'integer',
        minimum: 0,
      },
      generatorPublicKey: {
        type  : 'string',
        format: 'publicKey',
      },
      totalAmount       : {
        type   : 'integer',
        minimum: 0,
        maximum: constants.totalAmount,
      },
      totalFee          : {
        type   : 'integer',
        minimum: 0,
        maximum: constants.totalAmount,
      },
      reward            : {
        type   : 'integer',
        minimum: 0,
      },
      previousBlock     : {
        type     : 'string',
        format   : 'id',
        minLength: 1,
        maxLength: 20,
      },
      height            : {
        type   : 'integer',
        minimum: 1,
      },
    },
  },
  getFees           : {
    id        : 'blocks.getFees',
    type      : 'object',
    properties: {
      height: {
        type   : 'integer',
        minimum: 1,
      },
    },
  },
  getFee            : {
    id        : 'blocks.getFee',
    type      : 'object',
    properties: {
      height: {
        type   : 'integer',
        minimum: 1,
      },
    },
  },
  getStatus         : {
    id        : 'blocks.getStatus',
    type      : 'object',
    properties: {
      height: {
        type   : 'integer',
        minimum: 1,
      },
    },
  },
  getCommonBlock    : {
    id        : 'blocks.getCommonBlock',
    type      : 'object',
    properties: {
      id           : {
        type     : 'string',
        format   : 'id',
        minLength: 1,
        maxLength: 20,
      },
      previousBlock: {
        type     : 'string',
        format   : 'id',
        minLength: 1,
        maxLength: 20,
      },
      height       : {
        type   : 'integer',
        minimum: 1,
      },
    },
    required  : ['id', 'previousBlock', 'height'],
  },
};
