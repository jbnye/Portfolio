import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { useState } from "react";


export default function ResumeDialog() {
  const [loading, setLoading] = useState(true);

  return (
    <Dialog>
        <DialogTrigger asChild>
        <button
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded text-left"
        >
            Resume
        </button>
        </DialogTrigger>
        <DialogContent className="flex h-[90vh] max-w-6xl flex-col p-0">
            <div className="p-6 pb-2">
            <DialogHeader>
                <DialogTitle className="hidden">Resume</DialogTitle>
            </DialogHeader>
            </div>
            <div className="relative flex-1 overflow-hidden px-6 pb-6">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
            )}

            <iframe
                src="/Jacob_Nye_resume.docx.pdf"
                className="h-full w-full rounded-lg border"
                title="Resume"
                onLoad={() => setLoading(false)} 
            />
            </div>
        </DialogContent>
    </Dialog>
  );
}