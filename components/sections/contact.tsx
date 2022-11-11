const Contact : React.FC = () => {
  return (
    <div id="contact" className="h-min grid place-items-center content-center p-4">
      <div className="max-w-8xl w-full flex flex-wrap justify-center">
        <h2 className='text-4xl font-bold text-center w-full'>
          Whats next?:
        </h2>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="submit">
            Say hi
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact;
