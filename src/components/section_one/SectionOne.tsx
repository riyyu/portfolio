import FeatureItem from './FeatureItem';

import Icon1 from '../../assets/feature_one.png';
import Icon2 from '../../assets/feature_two.png';
import Icon3 from '../../assets/feature_three.png';
import Button from '../Button';

function SectionOne() {
  return (
    <div className="bg-pale-goldenrod-500">
      <div className="h-[38rem]" />
      <div className="flex items-center flex-col text-yankees-blue-500 pb-20">
        <p className="text-center mb-4  text-4xl font-bold leading-[2.5rem]">
          Building a Personal Startup is
          <span className="block">Now Easier and Faster</span>
        </p>
        <p className="text-center mb-4 text-sm font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <span className="block">industry. Lorem Ipsum has been the industry's standard.</span>
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <FeatureItem
            title="Better result"
            content="Lorem Ipsum is simply dummy text of the printing."
            icon={Icon1}
          />
          <FeatureItem
            title="Less paper work"
            content="Lorem Ipsum is simply dummy text of the printing."
            icon={Icon2}
          />
          <FeatureItem
            title="More profit"
            content="Lorem Ipsum is simply dummy text of the printing."
            icon={Icon3}
          />
        </div>
        <div>
          <Button type="outline-blue">Get Started</Button>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
