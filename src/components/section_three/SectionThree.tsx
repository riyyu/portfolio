import { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { User, Result } from '../../User';
import Button from '../Button';
import TestimonyItem from './TestimonyItem';

function SectionThree() {
  const [users, setUsers] = useState<Result[]>();

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=6')
      .then((raw) => raw.json())
      .then((res: User) => {
        setUsers(res.results);
      });
  }, []);

  var userSection = users ? (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        <TestimonyItem
          name={`${users[0].name.title} ${users[0].name.first} ${users[0].name.last}`}
          img={users[0].picture.medium}
          work={`${users[0].location.state}, ${users[0].location.country}`}
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
been the industry's standard dummy text ever since the 1500s.`}
        />
        <TestimonyItem
          name={`${users[1].name.title} ${users[1].name.first} ${users[1].name.last}`}
          img={users[1].picture.medium}
          work={`${users[1].location.state}, ${users[1].location.country}`}
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type  book.`}
        />
        <TestimonyItem
          name={`${users[2].name.title} ${users[2].name.first} ${users[2].name.last}`}
          img={users[2].picture.medium}
          work={`${users[2].location.state}, ${users[2].location.country}`}
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
        />
        <TestimonyItem
          name={`${users[3].name.title} ${users[3].name.first} ${users[3].name.last}`}
          img={users[3].picture.medium}
          work={`${users[3].location.state}, ${users[3].location.country}`}
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown `}
        />
        <TestimonyItem
          name={`${users[4].name.title} ${users[4].name.first} ${users[4].name.last}`}
          img={users[4].picture.medium}
          work={`${users[4].location.state}, ${users[4].location.country}`}
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
        />
        <TestimonyItem
          name={`${users[5].name.title} ${users[5].name.first} ${users[5].name.last}`}
          img={users[5].picture.medium}
          work={`${users[5].location.state}, ${users[5].location.country}`}
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type  book.`}
        />
      </Masonry>
    </ResponsiveMasonry>
  ) : (
    <div></div>
  );

  return (
    <div className="bg-yankees-blue-500 p-4 items-center">
      <div className="h-[10rem]"></div>
      <div className="flex justify-center items-center text-white flex-col">
        <p className="text-[3rem] font-semibold">Our Happy Customer</p>
        <p className="mb-10">Lorem Ipsum is simply dummy text of the printing.</p>
        <div className="container mx-auto">
          <div className="w-2/3 mx-auto">{userSection}</div>
        </div>
        <Button type="outline">View all testimone</Button>
      </div>
    </div>
  );
}

export default SectionThree;
