// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
// @ts-check

const sidebars = {
  manualSidebar: [
    'intro',
    'integration-guide',
    'authentication',
    'rate-limits',
    'error-handling',
  ],

  apiSidebar: [
    {
      type: 'category',
      label: 'Spot',
      items: [
        {
          type: 'category',
          label: 'REST API',
          items: [
            'spot/rest/ticker',
            'spot/rest/orderbook',
            'spot/rest/trades',
            'spot/rest/markets',
            'spot/rest/depth',
            'spot/rest/k-line',
            'spot/rest/summary',
             'spot/rest/ticker-all',
            
          ],
        },
        {
          type: 'category',
          label: 'WebSocket',
          items: [
            'spot/ws/ticker-stream',
            'spot/ws/trade-stream',
            'spot/ws/orderbook-stream',
            'spot/ws/connection'
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Assets',
      items: [
        {
          type: 'category',
          label: 'REST API',
          items: [
           
            'assets/rest/currencies',
            'assets/rest/assets',
            'assets/rest/coin-listings',
            "assets/rest/best-price",
            'assets/rest/blockchains',
            'assets/rest/currency',
          ],
        }
      ],
    },
    {
      type: 'category',
      label: 'Accounts',
      items: [
        {
          type: 'category',
          label: 'REST API',
          items: [
            'accounts/rest/member-levels',
          ],
        }
      ],
    },
  ],
};

export default sidebars;