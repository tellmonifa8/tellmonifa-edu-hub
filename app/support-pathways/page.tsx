import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Breadcrumb from '@/components/common/Breadcrumb';
import SupportPathwaysInteractive from './components/SupportPathwaysInteractive';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Support Pathways - StudentMindHub',
  description:
    'Find the right mental health support pathway for your needs. Access crisis support, professional therapy, peer connections, or self-help resources with clear step-by-step guidance.',
};

export default function SupportPathwaysPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background pt-20">
        <Breadcrumb />

        <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Icon
                  name="MapIcon"
                  size={40}
                  className="text-primary"
                  variant="solid"
                />
              </div>

              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                Your Path to Mental Wellness Support
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every journey to better mental health is unique. Explore these
                clear pathways to find the support that's right for you, whether
                you need immediate crisis help, professional therapy, peer
                connections, or self-guided resources.
              </p>
            </div>

            <SupportPathwaysInteractive />

            <div className="mt-16 pt-12 border-t border-border">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg border border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Icon
                        name="ShieldCheckIcon"
                        size={24}
                        className="text-secondary"
                        variant="solid"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        Verified Professionals
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        All therapists on Tellmonifa are GPC-registered and
                        verified to ensure you receive quality, professional
                        mental health support.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg border border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon
                        name="LockClosedIcon"
                        size={24}
                        className="text-accent"
                        variant="solid"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        Complete Confidentiality
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Your privacy is protected. All therapy sessions and
                        support interactions are completely confidential and
                        secure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
