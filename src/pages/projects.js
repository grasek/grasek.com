import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Bio from '../components/bio';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const posts = data.allMarkdownRemark.nodes;

    if (posts.length === 0) {
        return (
            <Layout location={location} title={siteTitle}>
                <div className='main-heading'>
                    <h4>
                        <Link to='/'>{siteTitle}</Link>
                    </h4>
                </div>
                <Bio />
                <p>No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).</p>
            </Layout>
        );
    }

    return (
        <Layout location={location} title={siteTitle}>
            <div class='p-2'>
                <h5>Open Source</h5>
                 <p>Below you will find some of my publicly available works with short descriptions.</p>
                <div class='projects'>
                    <div class='project'>
                        <div class='project-header'>
                            <h5>
                                Process Ruster
                                <small class='accent-color'>&nbsp; &nbsp;April 2023</small>
                            </h5>
                            <div class='project-labels'>
                                <span class='project-label'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='16' heihgt='16'>
                                        <path fill-rule='evenodd' d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' clip-rule='evenodd' />
                                    </svg>                       
	    &nbsp;0
                                </span>
                                <span class='project-label'>Rust</span>
                            </div>
                        </div>
                        <div class='project-content'>
                            <div class='project-description'>
                                <p class='project-subtitle'>Script listing all active processes under GNU/Linux </p>
		<p>An interesting feature of most GNU/Linux systems is the ability to view processes from within the file system. This is possible thanks to the /proc directory, under which a pseudo-filesystem called procfs is mounted. There are subdirectories for each process existing in the system, the names of the directories correspond to the individual process identifiers.</p><p> Using this dependency, we are able to list the currently active processes in a very simple way.</p>
                                <p>If you are interested in a detailed description of the /proc directory, I recommend looking at manual linked below.</p>
                                <p>
                                    <b>Links:</b>&nbsp;<a href={`https://github.com/grasek`}>Github</a>,&nbsp;<a href={`https://www.kernel.org/doc/html/latest/filesystems/proc.html`}>manual</a>
                                </p>
                            </div>
                            <div class='project-image'>
                                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#525252"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="44 8 44 16 52 16"></polyline><polygon points="52 16 44 8 12 8 12 56 52 56 52 16"></polygon><line x1="28" y1="20" x2="28" y2="44"></line><line x1="36" y1="32" x2="36" y2="44"></line><polyline points="44 36 44 44 20 44 20 28"></polyline></g></svg> 
                            </div>
                        </div>
            </div>
            <div class='project'>
                        <div class='project-header'>
                            <h5>
                                Line Counter
                                <small class='accent-color'>&nbsp; &nbsp;April 2023</small>
                            </h5>
                            <div class='project-labels'>
                                <span class='project-label'>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='16' heihgt='16'>
                                        <path fill-rule='evenodd' d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' clip-rule='evenodd' />
                                    </svg>
                                    &nbsp;0
                                </span>
                                <span class='project-label'>JavaScript</span>
                                <span class='project-label'>TypeScript</span>
                            </div>
                        </div>
                        <div class='project-content'>
                            <div class='project-description'>
                                <p class='project-subtitle'>Script that generates a histogram based on the content of the project</p>
                                <p>If you've ever been insterested in how many lines of code did you've written creating something, you might like Line Counter.</p>
                                <p>The tool based on regular expressions, iterates through the directory, browses the content and groups lines into 3 categories: empty line, commented line and line of code. </p>
                                <p>
                                    <b>Links:</b>&nbsp;<a href={`https://github.com/grasek`}>Github</a>
                                </p>
                            </div>
                            <div class='project-image'>
                                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#525252"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="44 8 44 16 52 16"></polyline><polygon points="52 16 44 8 12 8 12 56 52 56 52 16"></polygon><line x1="20" y1="20" x2="28" y2="20"></line><line x1="20" y1="28" x2="44" y2="28"></line><line x1="36" y1="36" x2="20" y2="36"></line><line x1="20" y1="44" x2="44" y2="44"></line></g></svg>
                            </div>
                        </div>
                    </div>
                    <div class='project'>
                        <div class='project-header'>
                            <h5>
                		TypeScript Algorithms                
		<small class='accent-color'>&nbsp; &nbsp;February 2023</small>
                            </h5>
                            <div class='project-labels'>
                                <span class='project-label'>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='16' heihgt='16'>
                                        <path fill-rule='evenodd' d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' clip-rule='evenodd' />
                                    </svg>
                                    &nbsp;1
                                </span>
                                <span class='project-label'>TypeScript</span>
               			<span class='project-label'>JavaScript</span>
				<span class='project-label'>Algorithms</span>
				<span class='project-label'>Data Structures</span>
		</div>
                        </div>
                        <div class='project-content'>
                            <div class='project-description'>
                                <p class='project-subtitle'>Set of more and less popular algorithms implemented both in TypeScript and JavaScript</p>
                                <p>When solving first 100 Project Euler problems, I noticed, that many of the tasks are similar and it doesn't make sense to write the same algorithm 5 times. So I created the repository along with Custom Loader to make the whole process more pleasure.</p>
                                <p>Most of the algorithms out there you've probably seen many times before, but there are also a few exotic and surprisingly fast algorithms such as Bhaskara - Brouncker or boosted Sieve of Atkin.</p><p>Feel free to use them in your projects.</p>
                                <p>
                                    <b>Links:</b>&nbsp;<a href={`https://github.com/grasek`}>Github</a>
                                </p>
                            </div>
                            <div class='project-image'>
                                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#525252"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="44 8 44 16 52 16"></polyline><polygon points="52 16 44 8 12 8 12 56 52 56 52 16"></polygon><polygon points="20 26 20 38 32 44 44 38 44 26 32 20 20 26"></polygon><line x1="32" y1="32" x2="44" y2="26"></line><line x1="32" y1="44" x2="32" y2="32"></line><line x1="44" y1="38" x2="32" y2="32"></line><line x1="20" y1="38" x2="32" y2="32"></line><line x1="20" y1="26" x2="32" y2="32"></line><line x1="32" y1="20" x2="32" y2="32"></line></g></svg>
                            </div>
                        </div>
                    </div>
                    <div class='project'>
                        <div class='project-header'>
                            <h5>
                              Book Spot 
                                <small class='accent-color'>&nbsp; &nbsp;May 2023</small>
                            </h5>
                            <div class='project-labels'>
                                <span class='project-label'>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='16' heihgt='16'>
                                        <path fill-rule='evenodd' d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' clip-rule='evenodd' />
                                    </svg>
                                    &nbsp;0
                                </span>
                                <span class='project-label'>JavaScript</span>
                                <span class='project-label'>Rust</span>
				<span class='project-label'>Big Data</span>
                            </div>
                        </div>
                        <div class='project-content'>
                            <div class='project-description'>
                                <p class='project-subtitle'>Minimalistic book browser with instant query processing</p>
                                <p>My second, and slightly more sophisticated than the previous one, Rust project. The idea behind BookSpot is to allow the user to instantly search for books on a specific topic.</p>
                                <p>For exaple if you study medicine, and you are looking for books about "Spinal Stenosis" (really don't know what is this), you can write "spi" and get all books related to this with authors and year of publication instantly from several hundred thousand record.</p>
                                <p>
                                    <b>Links:</b>&nbsp;<a href={`https://github.com/grasek`}>Github</a>
                                </p>
                            </div>
                            <div class='project-image'>
                                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#545454"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="44 8 44 16 52 16"></polyline><polygon points="52 16 44 8 12 8 12 56 52 56 52 16"></polygon><polygon points="32 44 44 42 44 20 32 22 20 20 20 42 32 44"></polygon><line x1="32" y1="21" x2="32" y2="43"></line></g></svg>                            </div>
                            </div>
                  </div>
                </div>
                
            </div>
            
            <hr></hr>
            <Bio />
        </Layout>
    );
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title='Projects' />;

export const pageQuery = graphql`
    {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                }
            }
        }
    }
`;
