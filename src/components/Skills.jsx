import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJs, faReact, faGolang, faDocker } from '@fortawesome/free-brands-svg-icons'

export function Skills() {
  const iconList = [
    { icon: faPython, name: 'Python' },
    { icon: faJs, name: 'Javascript' },
    { icon: faReact, name: 'React' },
    { icon: faGolang, name: 'Go' },
    { icon: faDocker, name: 'Docker' },
  ];

  return (
    <div id="skills" className="flex items-center gap-6 justify-center m-3 h-full sm:px-4 lg:px-8">
      <div className="sm:w-full lg:w-1/2 text-center">
        <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-300 text-3xl lg:text-4xl font-bold leading-tight opacity-75">
          Skills
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:w-full lg:flex lg:flex-row lg:items-center justify-center">
          {iconList.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-8">
              <FontAwesomeIcon className="text-5xl text-sky-400" icon={item.icon} />
              <span className="text-white mt-2">{item.name}</span>
            </div>
          ))}
          
          <div className="flex flex-col items-center justify-center p-8">
            <i className="devicon-selenium-original text-5xl text-sky-400" ></i>
            <span className="text-white mt-2">Selenium</span>
          </div>

          <div className="flex flex-col items-center justify-center p-8">
            <i className="devicon-jenkins-line text-5xl text-sky-400" ></i>
            <span className="text-white mt-2">Jenkins</span>
          </div>

          <div className="flex flex-col items-center justify-center p-8">
            <i className="devicon-qt-original text-5xl text-sky-400" ></i>
            <span className="text-white mt-2">Squish</span>
          </div>

          <div className="flex flex-col items-center justify-center p-8">
            <i className="devicon-apache-plain text-5xl text-sky-400" ></i>
            <span className="text-white mt-2">JMeter</span>
          </div>
          
        </div>

      </div>
    </div>
  )
}