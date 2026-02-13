import { Card } from "@/components/ui/card";
import { BookOpen, FileText } from "lucide-react";

const Publication = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="section-container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">
            Publication Opportunities
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            All accepted papers will be published in conference proceedings and
            selected papers will be recommended for journal publication.
          </p>
        </div>

        {/* Conference Proceedings */}
        <section id="proceedings" className="mb-16 scroll-mt-24">
          <Card className="p-8 border-t-4 border-blue-600 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <BookOpen className="h-10 w-10 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-2 text-blue-600">
                  Conference Proceedings
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                All accepted and registered papers will be published in the
                conference proceedings.
              </p>
            </div>
          </Card>
        </section>

        {/* Journal Publication */}
        <section id="journal" className="mb-16 scroll-mt-24">
          <Card className="p-8 border-t-4 border-amber-500 shadow-lg bg-gray-50">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="h-10 w-10 text-amber-500 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-2 text-blue-600">
                  Journal Publication
                </h2>
                <p className="text-gray-600">
                  Extended Versions in Reputed Journals
                </p>
              </div>
            </div>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Selected high-quality papers may be recommended for publication
                in reputed international journals after additional review.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Publication;
