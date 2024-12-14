import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../page";
import renderWithProvider from "../../components/renderWithProvider";

// Mocks
jest.mock("next/image", () => {
  return function MockNextImage({ src, alt, ...props }: any) {
    return <img src={src} alt={alt} {...props} />;
  };
});

jest.mock("dayjs", () => {
  return jest.fn(() => ({
    format: jest.fn(() => "2024 12-14T10:30:45 123 [Z] AM"), // Day.js format mock
  }));
});

describe("Home Component", () => {
  it("renders the main heading", () => {
    renderWithProvider(<Home />);
    const heading = screen.getByText(/DAY.JS Format/i);
    expect(heading).toBeInTheDocument();
  });

  it("displays the formatted date from dayjs", () => {
    renderWithProvider(<Home />);
    const formattedDate = screen.getByText(/2024 12-14T10:30:45 123 \[Z\] AM/i);
    expect(formattedDate).toBeInTheDocument();
  });

  it("renders the Counter component", () => {
    renderWithProvider(<Home />);
    const counterComponent = screen.getByText(/Counter/i);
    expect(counterComponent).toBeInTheDocument();
  });

  it('renders the "Deploy now" link', () => {
    renderWithProvider(<Home />);
    const deployLink = screen.getByRole("link", { name: /Deploy now/i });
    expect(deployLink).toBeInTheDocument();
    expect(deployLink).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com/new"),
    );
  });

  it("renders the footer links", async () => {
    renderWithProvider(<Home />);
    const footerLinks = await screen.findAllByRole("link");
    expect(footerLinks).toHaveLength(3); // Ensure all 3 footer links are present
    expect(footerLinks[0]).toHaveAttribute(
      "href",
      expect.stringContaining("learn"),
    );
    expect(footerLinks[1]).toHaveAttribute(
      "href",
      expect.stringContaining("templates"),
    );
    expect(footerLinks[2]).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org"),
    );
  });
});
