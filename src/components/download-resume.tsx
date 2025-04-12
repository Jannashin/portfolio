import { FC } from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

interface DownloadResumeProps {
  resumeUrl: string;
  className?: string;
}

const DownloadResume: FC<DownloadResumeProps> = ({ 
  resumeUrl = "/resume_jannashin.pdf", 
  className = "" 
}) => {
  const handleDownload = () => {
    // Create an anchor element and trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "/Jannashin_resume.docx"; // Change to your name
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button 
      onClick={handleDownload} 
      className={`flex items-center gap-2 ${className}`}
      variant="outline"
    >
      <Download size={16} />
      Download Resume
    </Button>
  );
};

export default DownloadResume;