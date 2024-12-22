export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Programming Languages</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>HTML/CSS</span>
                    <span>90%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-[90%] bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>JavaScript</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-[75%] bg-blue-600 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>ReactJS</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-[85%] bg-blue-600 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Java</span>
                    <span>80%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-[80%] bg-blue-600 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Python</span>
                    <span>90%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-[90%] bg-blue-600 rounded-full"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium">Git & Github</h4>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium">VS Code</h4>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium">Microsoft Word</h4>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium">Microsoft Excel</h4>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium">Microsoft Outlook</h4>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium">Microsoft PowerPoint</h4>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium">Alice 3</h4>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium">Adobe Photoshop</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}