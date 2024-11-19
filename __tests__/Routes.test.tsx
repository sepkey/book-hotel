import About from "@/app/about/page";
import Account from "@/app/account/page";
import Home from "@/app/page";
import Rooms from "@/app/rooms/page";

import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

function navigateTo(path: `/${string}`) {
  (useRouter as jest.Mock).mockReturnValue({
    pathname: { path },
  });
}

describe("Routes", () => {
  it("should display home page when navigating to /", () => {
    navigateTo("/");
    render(<Home />);
    expect(screen.getByRole("heading", { name: /home/i })).toBeInTheDocument();
  });
  it("should display rooms page when navigating to /rooms", () => {
    navigateTo("/rooms");
    render(<Rooms />);
    expect(screen.getByText(/rooms/i)).toBeInTheDocument();
  });
  it("should display about page when navigating to /about", () => {
    navigateTo("/about");
    render(<About />);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  it("should display account page when navigating to /account", () => {
    navigateTo("/account");
    render(<Account />);
    expect(screen.getByText(/account/i)).toBeInTheDocument();
  });

  //TODO: Check why this didn't work:
  //   it.each([
  //     { path: "", component: <Home /> },
  //     { path: "rooms", component: <Rooms /> },
  //     { path: "about", component: <About /> },
  //     { path: "account", component: <Account /> },
  //   ])(
  //     "should display $component page when navigating to $path",
  //     ({ component, path }) => {
  //       {
  //       }
  //       navigateTo(`/${path}`);
  //       render(component);
  //       expect(screen.getByText(path)).toBeInTheDocument();
  //     }
  //   );
});
