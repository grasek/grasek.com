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
                 <p>Below you will find some of my publicly available works, each with short description.</p>
                <div class='projects'>
                    
            
                    <div class='project'>
                        <div class='project-header'>
                            <h5>
                		    Sub-domain Lister                
		                    <small class='accent-color'>&nbsp; &nbsp;May 2023</small>
                            </h5>
                            <div class='project-labels'>
                                <span class='project-label'>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='16' heihgt='16'>
                                        <path fill-rule='evenodd' d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' clip-rule='evenodd' />
                                    </svg>
                                    &nbsp;0
                                </span>
                                <span class='project-label'>Go</span>
               			        <span class='project-label'>Networking</span>
                                <span class='project-label'>DNS</span>
                                 <span class='project-label'>Multithreading</span>
		                </div>
                        </div>
                        <div class='project-content'>
                            <div class='project-description'>
                                <p class='project-subtitle'>Sub-domains enumerating tool</p>
                                <p>One of the most powerful Go features is its rich networking libraries.</p>
                                <p></p>
                                <p>
                                    <b>Links:</b>&nbsp;<a href={`https://github.com/grasek`}>Github</a>
                                </p>
                            </div>
                            <div class='project-image'>
                                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#525252"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect x="8" y="40" width="16" height="16"></rect><rect x="40" y="40" width="16" height="16"></rect><rect x="24" y="8" width="16" height="16"></rect><polyline points="48 40 48 32 16 32 16 40"></polyline><line x1="32" y1="32" x2="32" y2="24"></line></g></svg>
                            </div>
                        </div>
                    </div>
                    <div class='project'>
                        <div class='project-header'>
                            <h5>
                		    Def              
		                    <small class='accent-color'>&nbsp; &nbsp;May 2023</small>
                            </h5>
                            <div class='project-labels'>
                                <span class='project-label'>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='16' heihgt='16'>
                                        <path fill-rule='evenodd' d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' clip-rule='evenodd' />
                                    </svg>
                                    &nbsp;0
                                </span>
                                <span class='project-label'>Shell</span>
               			        <span class='project-label'>Wikipedia API</span>
		                </div>
                        </div>
                        <div class='project-content'>
                            <div class='project-description'>
                                <p class='project-subtitle'>Wikipedia in your terminal</p>
                                <p>bash-translate is very useful thing</p>
                                <p></p>
                                <p>
                                    <b>Links:</b>&nbsp;<a href={`https://github.com/grasek`}>Github</a>
                                </p>
                            </div>
                            <div class='project-image'>
                                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#525252"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="32" cy="32" r="24"></circle><circle cx="28" cy="28" r="8"></circle><line x1="44" y1="44" x2="33.66" y2="33.66"></line></g></svg>
                            </div>
                        </div>
                    </div>
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
                                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#525252"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M56 32a23.74 23.74 0 0 0-.32-3.89L48 25.37 51.5 18a24.41 24.41 0 0 0-5.5-5.5L38.63 16l-2.74-7.68a23.8 23.8 0 0 0-7.78 0L25.37 16 18 12.5a24.41 24.41 0 0 0-5.5 5.5l3.5 7.37-7.68 2.74a23.8 23.8 0 0 0 0 7.78L16 38.63 12.5 46a24.41 24.41 0 0 0 5.5 5.5l7.37-3.5 2.74 7.68a23.8 23.8 0 0 0 7.78 0L38.63 48 46 51.5a24.41 24.41 0 0 0 5.5-5.5L48 38.63l7.68-2.74A23.74 23.74 0 0 0 56 32z"></path><circle cx="32" cy="32" r="4"></circle></g></svg>
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
                                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#525252"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polygon points="8 20 8 44 32 56 56 44 56 20 32 8 8 20"></polygon><line x1="32" y1="32" x2="56" y2="20"></line><line x1="32" y1="56" x2="32" y2="32"></line><line x1="56" y1="44" x2="32" y2="32"></line><line x1="8" y1="44" x2="32" y2="32"></line><line x1="8" y1="20" x2="32" y2="32"></line><line x1="32" y1="8" x2="32" y2="32"></line></g></svg>
                            </div>
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
