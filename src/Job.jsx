import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ReactMarkdown from "react-markdown";

export default function Job({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">
              {job.title} -{" "}
              <span className="text-muted-foreground font-normal">
                {job.company}
              </span>
            </CardTitle>
            <p className="text-sm text-muted-foreground mb-3">
              {new Date(job.created_at).toLocaleDateString()}
            </p>
            <div className="flex gap-2 mb-4">
              <Badge variant="secondary">
                {job.type}
              </Badge>
              <Badge variant="outline">{job.location}</Badge>
            </div>
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown>{job.how_to_apply}</ReactMarkdown>
            </div>
          </div>
          {job.company_logo && (
            <img
              className="hidden md:block ml-4 flex-shrink-0"
              height="50"
              width="50"
              alt={job.company}
              src={job.company_logo}
              style={{ objectFit: 'contain' }}
            />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="details">
            <AccordionTrigger>
              {open ? "Hide Details" : "View Details"}
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none">
                <ReactMarkdown>{job.description}</ReactMarkdown>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
