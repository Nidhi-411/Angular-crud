
import { Routes } from '@angular/router';
import { WelcomeComponent} from './components/welcome/welcome.component';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
export const routes: Routes = [
     
    // default rout 
    {
        path : '',
        redirectTo:'/welcome',
        pathMatch:"full"
    },
    {
        path : 'welcome',
        component : WelcomeComponent
    },

    { path: 'posts',
         component: PostComponent },

         {
            path:'form',
            component:PostFormComponent
         }
,
         { path: 'posts/:id', component: PostDetailsComponent },
];
