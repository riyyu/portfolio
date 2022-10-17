import BottomList from './BottomLists';

function Bottom() {
  return (
    <div className=" bg-yankees-blue-500 text-white">
      <div className="flex py-20 container mx-auto p-4">
        <div className="flex-initial w-2/5 space-y-6">
          <div>
            <p className="text-lg font-bold">ProgressUp</p>
          </div>
          <div>
            <p className="font-medium">Address:</p>
            <p className="font-normal">Buitenzorg, No 1 Indonesia</p>
          </div>
          <div>
            <p className="font-medium">Contact:</p>
            <p className="font-normal">0892892792</p>
            <p className="font-normal">contact@progressup.id</p>
          </div>
        </div>
        <div className="flex-1">
          <BottomList
            items={['Pages', 'Home', 'Feature', 'Pricing', 'Contact', 'About Us', 'MyAccount']}
          />
        </div>
        <div className="flex-1">
          <BottomList
            items={[
              'Company',
              'Partnership',
              'Press & News',
              'Support',
              'Licenses & Terms',
              'Cookie Policy'
            ]}
          />
        </div>
        <div className="flex-1">
          <BottomList items={['Social Media', 'Twitter', 'Instagram', 'LinkedIn', 'Facebook']} />
        </div>
      </div>
    </div>
  );
}

export default Bottom;
