function Features() {
  return (
    <div className='flex flex-col items-center p-6 gap-y-8'>
			<h1 className="text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-white to-secondary">Our Features</h1>
      <div className='w-full md:w-5/6 h-full grid md:grid-cols-3 gap-8 place-items-center'>
        <div className='w-full h-full flex flex-col gap-4 border-secondary border rounded-sm bg-secondary/30 hover:bg-secondary/50 duration-150 p-3'>
          <h2 className="text-lg text-center">Variety of Quizzes</h2>
          <p className="px-2">Conduct quizzes with long attempt windows or fast-paced, live ones with only a fixed amount of time to answer the current question before moving on to the next. Keep your participants on their toes!</p>
        </div>
        <div className='w-full h-full flex flex-col gap-4 border-secondary border rounded-sm bg-secondary/30 hover:bg-secondary/50 duration-150 p-3'>
          <h2 className="text-lg text-center">Video Procturing</h2>
          <p className="px-2">Reduce the use of unfair means using video procturing and tab-change detection mechanisms.</p>
        </div>
        <div className='w-full h-full flex flex-col gap-4 border-secondary border rounded-sm bg-secondary/30 hover:bg-secondary/50 duration-150 p-3'>
          <h2 className="text-lg text-center">Advanced AI Features</h2>
          <p>AI based cheating detection, and assistance in question creation with AI based recommendations and grammar checks.</p>
        </div>
      </div>
    </div>
  )
}

export default Features