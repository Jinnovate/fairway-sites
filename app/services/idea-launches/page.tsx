import DetailPage from '../../components/DetailPage';

export default function IdeaLaunches() {
  return <DetailPage eyebrow="Service / Idea launches" title="Give a new idea somewhere to begin." intro="For a new offer, event or early-stage business that needs to explain itself clearly and start finding real customers." accent="lime" sections={[{ title: 'Clarify it', body: 'We turn the idea into a concise offer that people can understand quickly.' }, { title: 'Test the response', body: 'The first site focuses on one meaningful action: enquire, join, book or buy.' }, { title: 'Grow from evidence', body: 'Once people use it, the next improvements are based on what they actually do.' }]} included={['Offer workshop', 'Launch page or small site', 'Email capture or enquiry', 'Analytics setup', 'Mobile-ready build', 'Launch support']} note="Choose a fixed price or discuss a capped growth partnership." />;
}
