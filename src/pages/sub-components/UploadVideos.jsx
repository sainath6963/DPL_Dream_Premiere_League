import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import React from "react";

const UploadVideos = () => {
  const projects = [];
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Tabs defaultValue="week">
        <TabsContent value="week">
          <Card>
            <CardHeader className="flex gap-4 sm:justify-between sm:flex-row sm:items-center">
              <CardTitle>Manage Your Videos</CardTitle>
              {/* <Button className="w-fit" onClick={handleReturnToDashboard}>
                Return to Dashboard
              </Button> */}
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Banner</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Stack
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Deployed
                    </TableHead>
                    <TableHead className="md:table-cell">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects && projects.length > 0 ? (
                    projects.map((element) => {
                      return (
                        <TableRow className="bg-accent" key={element._id}>
                          <TableCell>
                            <div className="font-medium">
                              <img
                                src={
                                  element.projectBanner &&
                                  element.projectBanner.url
                                }
                                alt={element.title}
                                className="w-16 h-16"
                              />
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{element.title}</div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {element.stack}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {element.deployed}
                          </TableCell>
                          <TableCell className="flex flex-row items-center gap-3 h-24">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link to={`/view/project/${element._id}`}>
                                    <button
                                      className="border-green-600 border-2 rounded-full h-8 w-8 flex 
                                      justify-center items-center text-green-600  hover:text-slate-950 
                                      hover:bg-green-600"
                                    >
                                      <Eye className="h-5 w-5" />
                                    </button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                  View
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link to={`/update/project/${element._id}`}>
                                    <button className="border-yellow-400 border-2 rounded-full h-8 w-8 flex justify-center items-center text-yellow-400  hover:text-slate-950 hover:bg-yellow-400">
                                      <Pen className="h-5 w-5" />
                                    </button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                  Edit
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button
                                    className="border-red-600 border-2 rounded-full h-8 w-8 flex justify-center items-center text-red-600  hover:text-slate-50 hover:bg-red-600"
                                    onClick={() =>
                                      handleProjectDelete(element._id)
                                    }
                                  >
                                    <Trash2 className="h-5 w-5" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                  Delete
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell className="text-2xl">
                        You have not added any Videos yet.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UploadVideos;
