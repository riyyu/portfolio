type CollectionItem = { image: string; title: string; subtitle: string };

function Collection() {
  const items: CollectionItem[] = [
    { title: 'Bed Room', subtitle: '100 Collections', image: 'image-1' },
    { title: 'Living Room', subtitle: '50 Collections', image: 'image-2' },
    { title: 'Kitchen', subtitle: '150 Collections', image: 'image-3' },
    { title: 'Bath Room', subtitle: '200 Collections', image: 'image-4' }
  ];

  return (
    <div className="container mx-auto flex flex-col justify-center items-center py-24">
      <div className="w-[23rem] text-center space-y-2 pb-24">
        <p className="text-vivid-tangelo-500 text-xl font-semibold">Get Inspired</p>
        <p className="font-semibold text-4xl">Room Collections</p>
        <p className="text-philippine-gray-500">
          Find the interior designs that we recommend to make your room more comfortable
        </p>
      </div>
      <div className="flex gap-2">
        {items.map((item, index) => (
          <CollectionItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function CollectionItem(props: CollectionItem) {
  return (
    <div
      className={`group h-96 w-80 hover:w-96 transition-all rounded-xl ${props.image} bg-cover bg-center flex items-end`}>
      <div className="h-24 w-full bg-dark-gunmetal-500 rounded-xl flex justify-between px-10 items-center opacity-0 group-hover:opacity-100 transition-all">
        <div className="flex flex-col">
          <p className="font-semibold text-white">{props.title}</p>
          <p className="text-philippine-gray-500">{props.subtitle}</p>
        </div>
        <div className="text-vivid-tangelo-500">
          <a href="#">View Details {'>'}</a>
        </div>
      </div>
    </div>
  );
}

export default Collection;
