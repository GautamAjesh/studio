export function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t py-8 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Codeshift IT Navigator. All rights reserved.</p>
        <p className="mt-1">Empowering Your Digital Transformation.</p>
      </div>
    </footer>
  );
}
