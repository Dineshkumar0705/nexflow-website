import {
  Building2,
  Hospital,
  Headphones,
  Users,
  Landmark,
  Briefcase
} from "lucide-react";

export default function Trusted() {

  const industries = [
    {
      name: "Healthcare Organizations",
      icon: Hospital,
    },
    {
      name: "BPO Operations",
      icon: Headphones,
    },
    {
      name: "Customer Support Teams",
      icon: Users,
    },
    {
      name: "Finance & Accounting",
      icon: Landmark,
    },
    {
      name: "Enterprise Operations",
      icon: Building2,
    },
    {
      name: "HR & Recruitment Teams",
      icon: Briefcase,
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-sm font-semibold tracking-widest text-nexflowOrange uppercase">
            Trusted Automation Systems
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-nexflowGreen tracking-tight">
            Trusted by Teams Across Industries
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            Nexflow automation systems are designed for organizations that
            want to streamline operations, eliminate repetitive work, and
            scale their processes intelligently.
          </p>

        </div>


        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">

          {industries.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                group
                bg-white
                p-7
                rounded-2xl
                border border-gray-100
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
                "
              >

                {/* Icon */}
                <div
                  className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-xl
                  bg-cardCream
                  mb-5
                  transition-transform duration-300
                  group-hover:scale-110
                  "
                >
                  <Icon className="w-6 h-6 text-nexflowGreen group-hover:text-nexflowOrange transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-nexflowGreen">
                  {item.name}
                </h3>

                {/* Line Accent */}
                <div
                  className="
                  mt-4
                  h-[3px]
                  w-12
                  bg-nexflowGreen
                  transition-all duration-300
                  group-hover:w-24
                  group-hover:bg-nexflowOrange
                  "
                />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}