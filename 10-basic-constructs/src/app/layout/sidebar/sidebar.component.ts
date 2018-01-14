import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';


const sidebarContent = [
  {
    title: 'Basics',
    links: [
      {url: '/databinding', title: '01.01 Databinding'},
      {url: '/structural-directives', title: '01.02 Structural Directives'},
      {url: '/nested-components', title: '01.03 Nested Components'},
      {url: '/lifecycle', title: '01.04 Lifecycle'},
      {url: '/service', title: '01.05 Service'},
    ]
  },
  {
    title: 'Forms',
    links: [
      {url: '/simple-form', title: '02.01 Simple Form'},
      {url: '/template-driven-form', title: '02.02 Template Driven Form'},
      {url: '/reactive-form', title: '02.03 Reactive Form'},
    ]
  },
  {
    title: 'Backend',
    links: [
      {url: '/backend/backend-access', title: '03.01 Backend Access'},
      {url: '/backend/backend-crud', title: '03.02 Backend CRUD'},
      {url: '/backend/backend-search', title: '03.03 Backend Search'},
    ]
  },
  {
    title: 'Routing',
    links: [
      {url: '/routing/route-snapshot/42', title: '04.01 Route Snapshot'},
      {url: '/routing/route-observable/42', title: '04.02 Route Observable'},
    ]
  },
  {
    title: 'Advanced',
    links: [
      {url: '/advanced/attribute-directive', title: '05.01 Attribute Directive'},
      {url: '/advanced/pipes', title: '05.02 Pipe'},
      {url: '/advanced/custom-pipes', title: '05.03 Custom Pipe'},
      {url: '/advanced/styling', title: '05.04 Styling'},
      {url: '/advanced/dependency-injection', title: '05.05 Dependency Injection'},
      {url: '/advanced/content-projection', title: '05.06 Content Projection'},
    ]
  },  {
    title: 'State Management',
    links: [
      {url: '/change-tracking/simple', title: 'Simple Change Tracking'},
      {url: '/change-tracking/messy', title: 'Messy Change Tracking'},
      {url: '/change-tracking/observable', title: 'Observable Change Tracking'},
      {url: '/change-tracking/ngrx', title: 'Ngrx'},
    ]
  },
];


@Component({
  selector: 'aw-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ['.chapter-link {padding-left: 20px}']
})
export class SidebarComponent implements OnInit {

  expandedChapters = [];
  chapters = sidebarContent;

  constructor(private router: Router) { }

  ngOnInit() {

    this.router.events.subscribe(navigationEvent => {
      if (navigationEvent instanceof NavigationEnd) {
        for (const chapter of this.chapters){
          if (chapter.links.find(l => l.url === navigationEvent.url)) {
            this.expandedChapters.push(chapter);
          }
        }
      }
    });
  }

  toggleChapter(chapter) {
    if (this.isExpanded(chapter)) {
      this.expandedChapters = this.expandedChapters.filter(c => c !== chapter);
    } else {
      this.expandedChapters = this.expandedChapters.concat(chapter);
    }
  }

  isExpanded(chapter) {
    return this.expandedChapters.includes(chapter);
  }
}
