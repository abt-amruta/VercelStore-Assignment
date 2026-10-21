"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="size-6" />
          </Button>
        }
      />

      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4 px-4 py-4">
          {/* Home */}
          <SheetClose render={<Link href="/">Home</Link>} />

          {/* About */}
          <SheetClose render={<Link href="/about">About</Link>} />

          {/* Nested Links */}
          <Accordion>
            <AccordionItem value="services">
              <AccordionTrigger>Services</AccordionTrigger>

              <AccordionContent>
                <div className="flex flex-col gap-4 pl-4 pt-2">
                  <SheetClose
                    render={
                      <Link href="/services/web-development">
                        Web Development
                      </Link>
                    }
                  />

                  <SheetClose
                    render={
                      <Link href="/services/app-development">
                        App Development
                      </Link>
                    }
                  />

                  <SheetClose
                    render={<Link href="/services/ui-ux">UI/UX Design</Link>}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Products */}
            <AccordionItem value="products">
              <AccordionTrigger>Products</AccordionTrigger>

              <AccordionContent>
                <div className="flex flex-col gap-4 pl-4 pt-2">
                  <SheetClose
                    render={<Link href="/products/product-1">Product 1</Link>}
                  />

                  <SheetClose
                    render={<Link href="/products/product-2">Product 2</Link>}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Contact */}
          <SheetClose render={<Link href="/contact">Contact</Link>} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
