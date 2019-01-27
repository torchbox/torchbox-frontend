import React from 'react'
import { storiesOf } from '@storybook/react'

import StreamfieldBlock from './streamfield-block'

storiesOf('Components/Shared Components', module).add('Streamfield Block', () => {
  return (
    <div style={{
      marginTop: 80,
      paddingTop: 20,
    }}>
      <StreamfieldBlock streamfield={[
        {
          'type': 'intro',
          'value': '<p><a href="https://git-scm.com/">Git</a> is the version control system of choice at Torchbox. It is powerful, fast, efficient and can be used on both small and very large projects.</p>',
        },
        {
          'type': 'paragraph',
          'value': '<p>A rule of thumb for any repository is to keep uploaded media, large files and sensitive information out. Saying this, accidents do happen. Due to an accidental commit, our website repository size recently increased by 8x to a staggering 700MB. These are the steps we took to clean it up.</p>',
        },
        {
          'type': 'paragraph',
          'value': '<p>When it happened, <a id="101" linktype="page">Nick</a> helpfully suggested the following radical approach:</p>',
        },
        {
          'type': 'aligned_image',
          'value': {
            'image': {
              'id': 1157,
              'alt': 'Nick\'s nuclear git repo clean suggestion',
            },
            'alignment': 'half',
            'caption': 'Nick\'s radical suggestion',
            'attribution': '',
          },
        },
        {
          'type': 'paragraph',
          'value': '<p>These are the actual steps we took to clean it up:</p>',
        },
        {
          'type': 'pullquote',
          'value': {
            'quote': 'All our carefully thought out and realistic targets based on previous campaign data were smashed within 36 hours of launch. We couldn’t have achieved this without the great work from Torchbox.',
            'attribution': 'Christopher Parker, Head of Marketing & Communications, SGOSS'
          }
        },
        {
          'type': 'h2',
          'value': 'Revert and rebase',
        },
        {
          'type': 'paragraph',
          'value': '<p>First, we tried the simplest approach: revert and rebase the branch.</p>',
        },
        {
          'type': 'raw_html',
          'value': '<script src="https://gist.github.com/zerolab/9ea9b5da72dde78a461255b735cd4196.js?file=tbx-git-cleanup-rebase.sh"></script>',
        },
        {
          'type': 'paragraph',
          'value': '<p>This would have been an ideal solution, were it not for Git’s guarantee of &#x27;what goes in, will come out&#x27;. In simple terms, each commit id depends on all of the commits that came before it. To change a commit, you need to go through all of its history - from oldest to newest. Git rebase will rewrite the history, but to delete a file for good you&#x27;ll need to remove all copies from the entire tree.</p>',
        },
        {
          'type': 'h2',
          'value': 'Git filter-branch',
        },
        {
          'type': 'paragraph',
          'value': '<p>To apply filters, such as removing a file when rewriting the commit history, you must use<a href="https://git-scm.com/docs/git-filter-branch"> Git filter-branch</a>. It&#x27;s the default go-to method for repository cleanups.</p>',
        },
        {
          'type': 'raw_html',
          'value': '<script src="https://gist.github.com/zerolab/9ea9b5da72dde78a461255b735cd4196.js?file=tbx-git-cleanup-filter-branch-sample.sh"></script>',
        },
        {
          'type': 'paragraph',
          'value': '<p>Git filter-branch runs a filter that removes the unnecessary files. You can then manually remove all original references, expire all the records in the Git replay log and run the garbage collector to the tainted data.</p>',
        },
        {
          'type': 'paragraph',
          'value': '<p>While it is a powerful tool, filter-branch takes a very long time on repositories with many commits, as it steps through every commit in your repository. It can also be fiddly.</p>',
        },
        {
          'type': 'h2',
          'value': 'BFG Repo cleaner',
        },
        {
          'type': 'paragraph',
          'value': '<p>Enter BFG. <a href="https://rtyley.github.io/bfg-repo-cleaner/">The BFG</a> is an alternative to the Git filter-branch method. It is written in Scala and can be anywhere from 10 to 50 times faster (it&#x27;s simpler to use too). You can remove files, directories, anything larger than a certain size and even run text replacement in files.</p>',
        },
        {
          'type': 'paragraph',
          'value': '<p>The typical workflow is:</p>',
        },
        {
          'type': 'raw_html',
          'value': '<script src="https://gist.github.com/zerolab/9ea9b5da72dde78a461255b735cd4196.js?file=tbx-git-cleanup-bfg-sample.sh"></script>',
        },
        {
          'type': 'paragraph',
          'value': '<p>This creates a mirror of the culprit repository, runs BFG to strip out anything larger than 100MB, expires old records and runs the Git garbage collector to strip the unwanted dirty data.</p>',
        },
        {
          'type': 'paragraph',
          'value': '<p>In our case, we ran:</p>',
        },
        {
          'type': 'raw_html',
          'value': '<script src="https://gist.github.com/zerolab/9ea9b5da72dde78a461255b735cd4196.js?file=tbx-git-cleanup-bfg.sh"></script>',
        },
        {
          'type': 'paragraph',
          'value': '<p><a href="https://gist.github.com/zerolab/3bdf148742cc8c82ab965f3e3c1095c8">See the full log</a></p>',
        },
        {
          'type': 'paragraph',
          'value': '<p>The above removed the media.old directory and files, but protected anything that was in the master branch which we knew to be clean.</p>',
        },
        {
          'type': 'paragraph',
          'value': '<p>As a result, the repository went from 696MB back down to 85MB. Not a bad result at all.</p>',
        },
        {
          'type': 'h2',
          'value': 'Post-cleanup',
        },
        {
          'type': 'paragraph',
          'value': '<p>Once the repository was clean again, we had to ensure everyone else’s copy was fixed too.</p>',
        },
        {
          'type': 'paragraph',
          'value': '<p></p><p>To do this, we deleted the old repository and cloned it again.</p>',
        },
        {
          'type': 'paragraph',
          'value': '<p>It is important to keep in mind that if any team members have work in progress, it is best to<a href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing"> rebase</a> any branches they created off the old repository. A single push or a merge can pollute the history and undo the cleanup.</p>',
        },
        {
          'type': 'h2',
          'value': 'What can you do to prevent this from happening',
        },
        {
          'type': 'paragraph',
          'value': '<p>Avoid the catch-all commands git add . and git commit -a on the command line. Instead, use git add the_filename.ext, git rm the_filename.ext to individually stage files. If you are uncomfortable with the command line, use a visual tool such as Tower, GitHub Desktop or GitKraken and check exactly what will be committed.</p>',
        },
        {
          'type': 'h2',
          'value': 'Useful resources',
        },
        {
          'type': 'paragraph',
          'value': '<p>Finally, here is a list of useful articles and tools:</p>',
        },
        {
          'type': 'paragraph',
          'value': '<ul><li><a href="https://rtyley.github.io/bfg-repo-cleaner/">The BFG Repo Cleaner</a></li><li>The GitHub<a href="https://help.github.com/articles/remove-sensitive-data/"> guide</a> to remove sensitive data</li><li>A handy Python<a href="https://gist.github.com/zerolab/5fc07eaae5cd542b6e5ca63b82fe9ad3"> script</a> to find the top largest files</li><li>A simple filter-branch <a href="https://gist.github.com/zerolab/20e20cfca85d42f2dd97624534ea9eb1">wrapper script</a></li><li>The <a href="https://git-scm.com/book/en/v2">Pro Git</a> book by Scott Chacon and Ben Straub</li></ul>',
        },
      ]}/>
    </div>
  )
})
