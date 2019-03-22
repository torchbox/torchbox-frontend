// Vendor Modules
import React from 'react'
import qs from 'query-string'
// Components
import BlogPostContainer, {
  previewQuery as blogPostQuery,
} from '@templates/blog-post'
import BlogPostsContainer, {
  previewQuery as blogPostsQuery,
} from '@templates/blogs'
import CaseStudyContainer, {
  previewQuery as workPageQuery,
} from '@templates/case-study'
import CulturePageContainer, {
  previewQuery as culturePageQuery,
} from '@templates/culture'
import PersonPageContainer, {
  previewQuery as personPageQuery,
} from '@templates/person'
import JobsPageContainer, {
  previewQuery as jobsPageQuery,
} from '@templates/jobs'
import StandardPageContainer, {
  previewQuery as standardPageQuery,
} from '@templates/standard'
import ServicePageContainer, {
  previewQuery as servicePageQuery,
} from '@templates/service'
import SubServicePageContainer, {
  previewQuery as subServicePageQuery,
} from '@templates/sub-service'
// Utils
import WagtailPreviewProvider from 'src/utils/wagtail-preview'

const previewMappings = {
  'blog.blogpage': {
    query: blogPostQuery,
    template: BlogPostContainer,
  },
  'blog.blogindexpage': {
    query: blogPostsQuery,
    template: BlogPostsContainer,
  },
  'work.workpage': {
    query: workPageQuery,
    template: CaseStudyContainer,
  },
  'people.culturepage': {
    query: culturePageQuery,
    template: CulturePageContainer,
  },
  'people.personpage': {
    query: personPageQuery,
    template: PersonPageContainer,
  },
  'torchbox.jobindexpage': {
    query: jobsPageQuery,
    template: JobsPageContainer,
  },
  'torchbox.standardpage': {
    query: standardPageQuery,
    template: StandardPageContainer,
  },
  'services.servicepage': {
    query: servicePageQuery,
    template: ServicePageContainer,
  },
  'services.subservicepage': {
    query: subServicePageQuery,
    template: SubServicePageContainer,
  },
}

export default WagtailPreviewProvider(previewMappings)
