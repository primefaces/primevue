# LLMs.txt - PrimeVue

PrimeVue provides LLM-friendly documentation formats to help AI models better understand and navigate the component library.

## /llms-full.txt

The /llms-full.txt file contains the complete documentation for all PrimeVue components in a single text file. This comprehensive resource includes all component examples, API documentation, theming information, and usage patterns. This file is ideal for: AI Model Training : Complete context about PrimeVue components Comprehensive Queries : When AI assistants need full documentation access Offline Reference : Single file containing all component information Search Indexing : Building search engines or documentation tools Note: This file is large (~800KB) and includes complete documentation for {{ componentCount }}+ components with Props, Slots, Emits, Pass Through Options, and Theming information.

## /llms.txt

The /llms.txt file provides a curated index of key PrimeVue documentation pages in a structured format. This file follows the llms.txt industry standard and serves as an entry point for AI models to discover and navigate the documentation. Each entry in the file includes: Component Name : The display name of the component URL : Direct link to the component's documentation page Description : Brief explanation of the component's purpose

## MarkdownExtensionDoc

Add a .md extension to any component's documentation URL to view or retrieve a Markdown-formatted version of that page. This feature enables direct access to machine-readable documentation for any specific component. Example URLs: Each Markdown file includes: Component Overview : Description and use cases Import Statement : How to import the component Usage Examples : Code examples with Options API and Composition API Props Table : Complete list of properties with types and defaults Events/Emits : Available events and their parameters Slots : Template slot definitions Pass Through Options : PT configuration for unstyled mode Theming : CSS classes and design tokens

## Overview

PrimeVue implements the llms.txt standard , an industry convention designed to help AI models better understand and navigate documentation. This implementation provides multiple formats optimized for different use cases, from quick reference to comprehensive documentation.

## UsageExamplesDoc

The Copy Markdown dropdown menu appears on every component documentation page, providing quick access to LLM-friendly formats. Integration Examples Here are some ways to use the LLM documentation formats:

