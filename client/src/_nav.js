export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-bell',

    },
    {
      title: true,
      name: 'Extra Details',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'MarketCap',
      url: '/details/marketcap',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Market',
      url: '/details/market',
      icon: 'icon-pie-chart',
    }
  ]
};
