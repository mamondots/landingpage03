import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Categories from "../Categories/Categories";
import Courses from "../Courses/Courses";
import EventSection from "../EventSection/EventSection";

import Instructs from "../Instructs/Instructs";
import Offering from "../Offering/Offering";
import Subcribe from "../Subcribe/Subcribe";
import Testimonal from "../Testimonal/Testimonal";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Categories></Categories>
            <Courses></Courses>
            <Testimonal></Testimonal>
            <Instructs></Instructs>
            <EventSection></EventSection>
            <Offering></Offering>
            <Subcribe></Subcribe>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;