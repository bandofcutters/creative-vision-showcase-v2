import { Calendar, Briefcase } from "lucide-react";

export const CVExperience = () => {
  const experiences = [
     {
      title: "United Gangs of America Season 2 (Vice)",
      company: "Vice Media",
      role: "Picture Editor, Documentary Series",
      date: "December 2024 - Current",
      details: "Currently editing this True Crime series about some of the most dangerous gangs across the US"
    },
    {
      title: "50K First Dates (Prime Video)",
      company: "Peacock Alley",
      role: "Picture Editor, Docu-Series",
      date: "July 2024 - November 2024",
      details: "2 x Episodes: Edited on Premiere, Director: Brent Hodge"
    },
    {
      title: "The Passionate Eye (CBC)",
      company: "Peacock Alley",
      role: "Picture Editor, Story Editor, Writer, Documentary",
      date: "March 2024 - July 2024",
      details: "1 x Episode: Harder Better Faster Stronger, Edited on Premiere. Director: Brent Hodge"
    },
    {
      title: "Mr. Dressup: Doc (Prime Video)",
      company: "marblemedia",
      role: "Picture Editor, Feature Documentary",
      date: "Nov 2022 - Jan 2023",
      details: "Mr. Dressup: The Magic of Make Believe premiered at TIFF 2023 winning the People's Choice Documentary Award"
    },
    {
      title: "Luxe Listings Toronto (Prime Video)",
      company: "MEM",
      role: "Picture Editor, Documentary - Reality TV",
      date: "Oct 2023 - Dec 2024",
      details: "2 x Episodes"
    },
    {
      title: "All Round Champion (BYUtv / TVO)",
      company: "marblemedia",
      role: "Picture Editor, Competition Reality",
      date: "Nov 2020 - March 2024",
      details: "5 x Episodes"
    },
    {
      title: "Best in Miniature S1 & S2 (CBC)",
      company: "marblemedia",
      role: "Supervising Editor / Story Editor, Competition Reality",
      date: "July 2021 - Jan 2023",
      details: "Story Editor 2 x Episodes S2 / Supervising Editor 8 x Episodes S2, Lead Editor 2 x Episodes S1"
    },
    {
      title: "The Amazing Race Canada (CTV)",
      company: "Insight Productions",
      role: "Senior Editor /Lead Editor, Competition Reality",
      date: "May 2014 - Aug 2023",
      details: "Lead Editor: 12 x Episodes, 7 x Seasons\nSenior/Supervising Editor: 11 x Episodes, Season 9"
    },
    {
      title: "Drink Masters (Netflix)",
      company: "marblemedia",
      role: "Picture Editor, Competition Reality",
      date: "Jan 2022 - Feb 2022",
      details: "1 x Episode 3"
    },
    {
      title: "Big Brother Canada (Global)",
      company: "Insight Productions",
      role: "Supervising Editor, Competition Reality",
      date: "Feb 2013 - May 2023",
      details: "Supervising Editor: 100+ x Episodes, 10 x Seasons\nPicture Editor: 20 x Episodes, Season 11"
    },
    {
      title: "Dragons Den S15 & S16 (CBC)",
      company: "CBC",
      role: "Picture Editor, Reality",
      date: "Aug 2020 - Oct 2021",
      details: ""
    },
    {
      title: "The Bachelor Canada S3 (W)",
      company: "Good Human Productions",
      role: "Lead Editor, Reality",
      date: "May 2017 - Oct 2017",
      details: "3 x Episodes"
    },
    {
      title: "Top Chef Canada S6 (Food Network)",
      company: "Insight Productions",
      role: "Picture Editor, Competition Reality",
      date: "Nov 2017 - Feb 2018",
      details: "2 x Episodes"
    },
    {
      title: "MasterChef Canada S1 & S2 (CTV)",
      company: "Proper Television",
      role: "Lead Editor, Competition Reality",
      date: "Aug 2013 - Feb 2016",
      details: "3 x Episodes"
    },
    {
      title: "Farmhouse Facelift S3 (HGTV)",
      company: "Be Collective Media",
      role: "Lead Editor, Reno-Reality",
      date: "Mar 2023 - Apr 2023",
      details: "2 x Episodes"
    },
    {
      title: "The Deed S1 & The Deed Chicago S1 (CNBC)",
      company: "Cineflix",
      role: "Picture Editor, Reality",
      date: "Aug 2016 - Jan 2017",
      details: "3 x Episodes"
    },
    {
      title: "American Beauty Star S2 (Lifetime, A&E)",
      company: "Insight",
      role: "Post Producer, Competition Reality",
      date: "Aug 2018 - Feb 2019",
      details: "Edited & Managed Post Production team through 10 x Episodes"
    },
    {
      title: "Race Against the Tide S1 (CBC)",
      company: "marblemedia",
      role: "Picture Editor, Competition Reality",
      date: "Jan 2021 - Mar 2021",
      details: "2 x Episodes"
    },
    {
      title: "Hockey Wives S1 (W Network)",
      company: "Bristow Global Media",
      role: "Picture Editor, Docu-Soap",
      date: "Aug 2014 - Oct 2014",
      details: ""
    },
    {
      title: "Brave New Girls (E! Channel)",
      company: "Peacock Alley Ent.",
      role: "Picture Editor, Docu-Soap",
      date: "May 2013 - Oct 2013",
      details: ""
    },
    {
      title: "Hello Goodbye (CBC)",
      company: "FORTÉ Entertainment",
      role: "Picture Editor, Reality",
      date: "Oct 2015 - Dec 2015",
      details: "2 x Episodes"
    },
    {
      title: "At the Table with…",
      company: "Fir Valley Productions",
      role: "Picture Editor, Documentary Series",
      date: "2007 - 2009",
      details: "13 x Episodes"
    }
  ];

  return (
    <section>
      <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Briefcase className="text-accent" /> Experience
      </h3>
      <div className="space-y-6">
        {experiences.map((job, index) => (
          <div key={index} className="border-l-2 border-accent pl-4">
            <h4 className="text-white font-semibold">{job.title}</h4>
            <p className="text-gray-400">{job.company}</p>
            <p className="text-accent">{job.role}</p>
            <p className="text-gray-400 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {job.date}
            </p>
            <p className="text-gray-300 mt-2 whitespace-pre-line">{job.details}</p>
          </div>
        ))}
        <p className="text-gray-400 italic">
          Complete linear work history available at: 
          <a href="https://linkedin.com/in/ryanmonteitheditor" className="text-accent ml-1 hover:underline" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/ryanmonteitheditor
          </a>
        </p>
      </div>
    </section>
  );
};
