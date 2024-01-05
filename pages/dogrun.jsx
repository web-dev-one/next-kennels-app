import Layout from "../components/Layout/Layout";
import dogruns from '../components/Services/services-dogruns'
import Service from "../components/Services/Service";

export default function DogRun() {
  return (
    <Layout>
      <Service service={dogruns} title="Dog Runs" />
    </Layout>
  );
}
