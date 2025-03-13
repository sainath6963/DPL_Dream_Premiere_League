import { Button } from "@/components/ui/button";
import {
  FolderGit,
  History,
  Home,
  LayoutGrid,
  LogOut,
  MessageSquareMore,
  Package,
  Package2,
  PanelLeft,
  PencilRuler,
  User,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PanelLeftOpen } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Dashboard from "./sub-components/Dashboard.jsx";

import Messages from "./sub-components/Messages.jsx";

import Registraion from "./sub-components/Registraion.jsx";
import AboutUS from "./sub-components/AboutUS.jsx";
import Venue from "./sub-components/Venue.jsx";

function HomePage() {
  const [active, setActive] = useState("Dashboard");

  const dispatch = useDispatch();

  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
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
                    active === "AddApplication"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } `}
                  onClick={() => setActive("AddApplication")}
                >
                  <LayoutGrid className="h-5 w-5" />
                  AddApplication
                </Link>
                <Link
                  href="#"
                  className={`flex items-center gap-4 px-2.5 ${
                    active === "Account"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } `}
                  onClick={() => setActive("Account")}
                >
                  <User className="h-5 w-5" />
                  Account
                </Link>
                <Link
                  href="#"
                  className={`flex items-center gap-4 px-2.5 ${
                    active === "AddTimeline"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } `}
                  onClick={() => setActive("AddTimeline")}
                >
                  <History className="h-5 w-5" />
                  AddTimeline
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
            case "AddApplication":
              return <AddApplication />;
              break;
            case "AddTimeline":
              return <AddTimeline />;
              break;
            case "Messages":
              return <Messages />;
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
