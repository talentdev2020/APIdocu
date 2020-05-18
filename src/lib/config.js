const apiPath = 'https://www.getpostman.com/collections/49f2aa67fa4d8ea7e70d';
const descriptions = {
  querycardorderslist: {
    success: true,
    data: {
      id: 'The id of the card order object',
      entity_id: 'The id of the entity that the card order was created to ',
      card_id: 'The id of the card id that the card order was issued against',
      card_upgrade_id: 'The id of the card upgrade id',
      reference: 'A reference from the network referencing the card order',
      type: 'One of issue, upgrade',
      status: 'One of processing, processed, reissue, verified, failed',
      created_at: 'The date that the record was created',
      updated_at: 'The date that the record was updated',
    },
    links: {
      first: 'The first page for card orderlist',
      last: 'The last page for card oderlist',
      prev: 'The previous page of current card orderlist',
      next: 'The next page of current card orderlist',
    },
    meta: {
      current_page: 'The page number of current card orderlist',
      from: 'The first number of card orderlist',
      last_page: 'The last number of card orderlist',
      path: 'The path for the card orderlists',
      per_page: 'The number of card orderlist per page',
      to: 'The number limist of card orderlist per page',
      total: 'Total card orders',
    },
  },
};
export { apiPath };
export default descriptions;
