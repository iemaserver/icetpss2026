import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Award, Briefcase, BookMarked } from "lucide-react";

const Committee = () => {
  const committees = [
    {
      id: "organizing",
      title: "Organizing Committee",
      description: "Meet the core team organizing ICETPS 2026",
      icon: Users,
      path: "/committee/organizing",
      color: "text-blue-600",
      borderColor: "border-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: "advisory",
      title: "Advisory Committee",
      description: "Distinguished advisors guiding the conference",
      icon: Award,
      path: "/committee/advisory",
      color: "text-purple-600",
      borderColor: "border-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: "technical",
      title: "Technical Committee",
      description: "Experts overseeing technical content and reviews",
      icon: Briefcase,
      path: "/committee/technical",
      color: "text-green-600",
      borderColor: "border-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: "editors",
      title: "Volume Editors",
      description: "Editors managing the conference proceedings volumes",
      icon: BookMarked,
      path: "/committee/editors",
      color: "text-amber-600",
      borderColor: "border-amber-600",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="section-container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">
            Conference Committees
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ICETPS 2026 is supported by distinguished academicians, researchers,
            and industry experts across multiple committees.
          </p>
        </div>

        {/* Committees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {committees.map((committee) => {
            const IconComponent = committee.icon;
            return (
              <Link key={committee.id} to={committee.path}>
                <Card
                  className={`p-8 border-t-4 ${committee.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 h-full ${committee.bgColor} hover:scale-105 cursor-pointer`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <IconComponent
                      className={`h-12 w-12 ${committee.color} flex-shrink-0`}
                    />
                    <div>
                      <h2
                        className={`text-2xl font-bold mb-2 ${committee.color}`}
                      >
                        {committee.title}
                      </h2>
                      <p className="text-gray-600">{committee.description}</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span
                      className={`text-sm font-semibold ${committee.color} hover:underline`}
                    >
                      View Members →
                    </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Committee;
