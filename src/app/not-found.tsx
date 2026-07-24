import { Button } from '@/components';
import NotFoundVisual from '@/components/ui/NotFoundVisual';

const NotFound = () => {
  return (
    <main className="grid min-h-svh place-items-center px-6">
      <div className="w-full max-w-xl text-center">
        <NotFoundVisual />

        <Button type="link" href="/" size="lg" className="mt-16" sameTab center>
          go home
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
