import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faDocker, faGithub } from '@fortawesome/free-brands-svg-icons'

export function Projects() {
  const iconList = [
      { icon: faPython, name: 'Python' },
      { icon: faDocker, name: 'Docker' },
    ];
  return (
    <div id="projects" className="flex items-center gap-6 justify-center m-3 h-full sm:px-4 lg:px-8">
      <div className="sm:w-full text-center">
        <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-300 text-3xl lg:text-4xl font-bold leading-tight opacity-75">
          Projects
        </h1>
        

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-2xl mx-auto lg:flex lg:flex-row lg:items-center justify-center">
          <div className="bg-slate-400 m-4 p-2 rounded-lg shadow-lg w-full flex items-center justify-center">
              <div data-iframe-width="150" data-iframe-height="270">
                <h1 className="font-bold text-2xl text-zinc-600 bg-clip-text">Test Automation Framework</h1><br/>
                <h2>A production-ready test automation framework demonstrating modern DevOps practices for QA. </h2>

                <div className="flex flex-row items-center justify-center p-2">
                  <i className="devicon-selenium-original text-2xl p-2" ></i>
                  {iconList.map((item, index) => (
                      <FontAwesomeIcon className="text-2xl p-2" icon={item.icon} />   
                  ))}
                  <i className="devicon-githubactions-plain text-2xl p-2" ></i>   
                </div>

                <div className="w-full flex flex-row justify-center items-center gap-4 p-2">
                  <a 
                    href="https://github.com/larissa-fiorini/selenium-devops-grid-ci"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors shadow-md"
                  >
                    <span>Project Code</span>
                    <FontAwesomeIcon className="text-xl" icon={faGithub} />
                  </a>
                </div>

                <div className="w-full flex flex-row justify-center items-center gap-4 p-2">
                  <a 
                    href="https://larissa-fiorini.github.io/selenium-devops-grid-ci/4/index.html"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors shadow-md"
                  >
                    <span>Open Report</span>
                    <img src="https://avatars.githubusercontent.com/u/5879127?s=280&v=4" className="w-6 h-6 object-contain" ></img>
                  </a>
                </div>

              </div>
          </div>
        </div>
      </div>
    </div>
  )
}