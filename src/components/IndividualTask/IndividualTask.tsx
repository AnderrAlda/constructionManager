interface props {
  img: string;
  title: string;
  date: string;
}

const IndividualTask = ({ img, title, date }: props) => {
  return (
    <div className="flex gap-7 mt-5 ml-3 border-2 border-black shadow-md mr-3 py-6 px-2 rounded-xl">
      <img
        className="h-20 rounded-full  border-2 border-black shadow-2xl"
        src={img}
        alt="worker1"
      />
      <div>
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-gray-500 mt-2">{date}</p>
        <button
          className="mt-5 bg-black
   text-white rounded-3xl h-10 w-32
   text-lg"
        >
          Ver mas
        </button>
      </div>
    </div>
  );
};

export default IndividualTask;
