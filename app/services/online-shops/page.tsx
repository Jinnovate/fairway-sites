import DetailPage from '../../components/DetailPage';

export default function OnlineShops() {
  return <DetailPage eyebrow="Service / Online shops" title="Turn products into a simple buying journey." intro="A focused shop that helps people understand the product, trust the business and complete a purchase without friction." accent="orange" sections={[{ title: 'Shape the range', body: 'We organise products and collections around how customers actually browse.' }, { title: 'Build the journey', body: 'Product pages, basket and checkout are designed to keep buying simple.' }, { title: 'Ready to trade', body: 'Payments, delivery rules and essential shop settings are prepared for launch.' }]} included={['Shop structure', 'Product page system', 'Mobile checkout', 'Payment setup', 'Delivery configuration', 'Owner handover']} note="Shop pricing depends on the catalogue and integrations. You receive a clear quote first." />;
}
