import { Button } from "@/components/ui/button";
import {
  FolderGit,
  Home,
  MessageSquareMore,
  Package2,
  PencilRuler,
} from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { PanelLeftOpen } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Dashboard from "./sub-components/Dashboard.jsx";

import Registraion from "./sub-components/Registraion.jsx";
import AboutUS from "./sub-components/AboutUS.jsx";
import Venue from "./sub-components/Venue.jsx";
import Rules from "../pages/sub-components/Rules.jsx";
import PrizeAward from "../pages/sub-components/PrizeAwards.jsx";

function HomePage() {
  const [active, setActive] = useState("Dashboard");

  const dispatch = useDispatch();

  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-gray-100 text-black p-4">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 max-[900px]">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeftOpen className="h-5 w-5" />{" "}
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link className="group flex h-10 w-10 shrink=0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base ">
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Home</span>
                </Link>
                <Link
                  href="#"
                  className={`flex items-center gap-4 px-2.5 ${
                    active === "Dashboard"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } `}
                  onClick={() => setActive("home")}
                >
                  <Home className="h-5 w-5" />
                  Home
                </Link>
                <Link
                  href="#"
                  className={`flex items-center gap-4 px-2.5 ${
                    active === "AddProject"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } `}
                  onClick={() => setActive("About_Us")}
                >
                  <FolderGit className="h-5 w-5" />
                  About Us
                </Link>
                <Link
                  href="#"
                  className={`flex items-center gap-4 px-2.5 ${
                    active === "Venue"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } `}
                  onClick={() => setActive("Venue")}
                >
                  <PencilRuler className="h-5 w-5" />
                  Venue
                </Link>
                <Link
                  href="#"
                  className={`flex items-center gap-4 px-2.5 ${
                    active === "AddProject"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } `}
                  onClick={() => setActive("Rules & Regulations")}
                >
                  <FolderGit className="h-5 w-5" />
                  Rules & Regulations
                </Link>
                <Link
                  href="#"
                  className={`flex items-center gap-4 px-2.5 ${
                    active === "AddProject"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } `}
                  onClick={() => setActive("Prizes")}
                >
                  <FolderGit className="h-5 w-5" />
                  Prizes
                </Link>

                <Link
                  href="#"
                  className={`flex items-center gap-4 px-2.5 ${
                    active === "Messages"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } `}
                  onClick={() => setActive("Registration")}
                >
                  <MessageSquareMore className="h-5 w-5" />
                  Registration
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        {(() => {
          switch (active) {
            case "home":
              return <Dashboard />;
              break;
            case "About_Us":
              return <AboutUS />;
              break;
            case "Venue":
              return <Venue />;
              break;
            case "Rules & Regulations":
              return <Rules />;
              break;
            case "Prizes":
              return <PrizeAward />;
              break;

            case "Registration":
              return <Registraion />;
              break;
            default:
              return <Dashboard />;
              break;
          }
        })()}
      </div>
    </>
  );
}

export default HomePage;
