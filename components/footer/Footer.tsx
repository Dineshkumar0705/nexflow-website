"use client";

import Link from "next/link";

import {
  Mail,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {

  const openDemo = () => {

    if (typeof window === "undefined") return;

    const url = "https://calendly.com/nexflowauto-ai/30min";

    const width = 900;
    const height = 700;

    const left = window.screenX + (window.innerWidth - width) / 2;
    const top = window.screenY + (window.innerHeight - height) / 2;

    window.open(
      url,
      "NexflowDemo",
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
    );
  };

  return (
    <footer className="section-glass">

      <div className="glass-container max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-14 pb-16">

          {/* BRAND */}
          <div>

            <h3 className="text-2xl font-bold text-nexflowGreen">
              Nexflow
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed max-w-sm">
              Nexflow builds intelligent automation systems that help
              businesses eliminate repetitive work, streamline
              operations, and scale efficiently using modern AI-powered
              workflows.
            </p>

            <div className="social-card mt-6">

              <a
                href="mailto:nexflowauto.ai@gmail.com"
                className="socialContainer containerMail"
              >
                <Mail className="socialSvg" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="socialContainer containerInstagram"
              >
                <Instagram className="socialSvg" />
              </a>

              <a
                href="https://www.linkedin.com/company/nexflow1/"
                target="_blank"
                rel="noopener noreferrer"
                className="socialContainer containerLinkedin"
              >
                <Linkedin className="socialSvg" />
              </a>

              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="socialContainer containerDiscord"
              >
                <MessageCircle className="socialSvg" />
              </a>

            </div>

          </div>


          {/* SOLUTIONS */}
          <div>

            <h4 className="footer-title text-nexflowOrange">
              Solutions
            </h4>

            <ul className="footer-links">

              <li>
                <Link href="/solutions/automation-systems">
                  Automation Systems
                </Link>
              </li>

              <li>
                <Link href="/solutions/workflow-automation">
                  Workflow Automation
                </Link>
              </li>

              <li>
                <Link href="/solutions/lead-automation">
                  Lead Automation
                </Link>
              </li>

              <li>
                <Link href="/solutions/ai-automation">
                  AI Automation
                </Link>
              </li>

              {/* ✅ FIXED CRM LINK */}
              <li>
                <Link href="/solutions/crm-automation">
                  CRM Automation
                </Link>
              </li>

            </ul>

          </div>


          {/* INDUSTRIES */}
          <div>

            <h4 className="footer-title text-nexflowOrange">
              Industries
            </h4>

            <ul className="footer-links">

              <li>
                <Link href="/industries/healthcare">
                  Healthcare
                </Link>
              </li>

              <li>
                <Link href="/industries/ecommerce">
                  E-commerce
                </Link>
              </li>

              <li>
                <Link href="/industries/finance">
                  Finance
                </Link>
              </li>

              <li>
                <Link href="/industries/education">
                  Education
                </Link>
              </li>

            </ul>

          </div>


          {/* COMPANY */}
          <div>

            <h4 className="footer-title text-nexflowOrange">
              Company
            </h4>

            <ul className="footer-links">

              <li>
                <Link href="/about">
                  About Nexflow
                </Link>
              </li>

              <li>
                <Link href="/projects">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>

              <li className="mt-4">

                <button
                  type="button"
                  onClick={openDemo}
                  className="
                  px-5 py-2
                  rounded-lg
                  text-sm
                  font-semibold
                  bg-nexflowGreen
                  text-white
                  hover:opacity-90
                  transition
                  "
                >
                  Book Demo
                </button>

              </li>

            </ul>

          </div>

        </div>

        <div className="border-t border-gray-300"></div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 text-gray-500 text-sm">

          <p>
            © {new Date().getFullYear()} Nexflow. All rights reserved.
          </p>

          <div className="flex gap-8 mt-4 md:mt-0">

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}