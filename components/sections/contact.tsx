const Contact: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="max-w-8xl w-full">
      <div className="text-center">
        <h2 className='text-4xl text-sky-100 font-bold w-full'>
          Whats next?
        </h2>
      </div>
      <div className="flex flex-col items-center mt-5">
       <button className="bg-green-500 hover:bg-green-700 text-white text-xl font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline" type="submit">
          Say hi
        </button>
 
      </div>
     </div>
    </div>
  )
}

export default Contact;
