import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import img1 from "../images/commimage1.png";
import img2 from "../images/commimage2.png";
import img3 from "../images/commimage3.png";

export const config = {
  Heading: "Neighborly Hub Dashboard",
  Welcome: "Welcome to the Neighborly Hub Dashboard!",
  info: "This will be where you find out:",
  icon: <CheckCircleIcon className="h-5 w-5 text-[#0B408F]" />,
  point1: "Which locations you are sharing referrals with",
  point2: "Contact information of other Franchise Owners in your Hub",
  point3: "Your Multi Brand Customer (MBC) information:",
  point4: "How many you have",
  point5: "Which Neighborly brands you share them with",
  button: "Click here to get started",

  mainheading: "Molly Maid of Chester & Delaware Counties",
  sideheading: "Actionable Recommendations",

  communication: [
    {
      thumbnail: img1,
      name: "Presidents Message",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      link: "https://google.com",
    },
    {
      thumbnail: img2,
      name: "Operations Update",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      link: "https://facebook.com",
    },
    {
      thumbnail: img3,
      name: "PR Placements",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      link: "https://twitter.com",
    },
  ],
  buttonLabel: "Learn More",
  commheading: "Franchise Communications",
  commbutton: "Read post",
  commbuticon: <ArrowUpRightIcon className="h-3 w-3 text-[#407EC9]" />,
  commfooter: "View All Franchise Communications",
  footerlink: "https://www.neighborlybrands.com",

  VHIHeading: "Visual Health Indicator",
  VHIContent:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  VHISubheading: "Your Score:",
  VHIScore: "20",
  VHIPercentage: "10%",
  VHIPoint1: "Under Performing",
  VHIPoint2: "Average Performance",
  VHIPoint3: "Outstanding Performance",
};
