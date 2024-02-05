import Layout from "../components/Layout/Layout";
import WelcomeCarousel from "../components/Carousel";

import Links from "../components/Links";
const links = [{title: "Pet-Safe-Kennels Info", href: "https://www.pet-safe-kennels.com", des: "for dogs"}, 
{title: "Catios", href: "https://petsafecatios.com/"}, 
{title: "Living with Coytoes", href: "https://www.azgfd.com/wildlife-conservation/living-with-wildlife/living-with-coyotes/#:~:text=Feed%20your%20pets%20inside%20and,sturdy%20enclosure%20with%20a%20roof."}, 
{title: "East Valley k9 Services", href: "https://eastvalleyk9.com/how-to-protect-your-dog-from-coyotes-7-tips-and-more/"}, 
{title: "12 News", href: "https://www.12news.com/article/life/animals/arizona-family-shares-warning-to-pet-owners-after-losing-pup-to-coyote/75-7cd49bfc-c369-455c-ae05-c435b1e7cfe1"}, 
{title: "American Kennel Club", href: "https://www.akc.org/expert-advice/health/coyote-attacks-protecting-dogs/"},
{title: "Coyote Proof Kennels", href: "https://coyote-proof-kennels.com/Arizona/Scottsdale-Pet-Kennel-Installers.htm"},
{title: "Coyote FAQ", href: "https://www.paradisevalleyaz.gov/105/Coyotes"},
{title: "Vet Loan Bill", href: "https://www.azhumane.org/news/sb-1271-passes-senate/"}]

export default function Waxing() {
  return (
    <Layout>
        <WelcomeCarousel />
        <div className="flex-col justify-center items-center text-center">
         <p className="text-xl mt-2">Welcome to our resource page dedicated to safeguarding your beloved dogs and cats from potential encounters with coyotes. Coyotes can pose a threat to pets, especially when living in urban or suburban areas. However, with the right precautions and knowledge, you can reduce the risk and keep your furry friends safe. Below are some helpful links and resources to guide you</p>
         <h1 className="text-xl text-center">Helpful Links about protecting your pets:</h1>
            <Links links={links}/>
        <p className="text-sky-900 mx-auto">send us links if you think they are helpful</p>
        </div>
    </Layout>
  );
}
