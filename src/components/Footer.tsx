import { Container } from "@/components/layout";

const Footer = () => {
  return (
    <footer className="section-padding-compact bg-secondary/30 border-t border-border">
      <Container>
        <p className="text-xs sm:text-sm text-muted-foreground text-center">
          © 2025 Yash Verma. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
