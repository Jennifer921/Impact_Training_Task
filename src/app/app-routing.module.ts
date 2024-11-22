import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { NutriLoginComponent } from './NutriLogin/NutriLogin.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignUpComponent } from './signUp/signUp.component';
import { DessertsComponent } from './desserts/desserts.component';
import { SaladsComponent } from './salads/salads.component';
import { CommunityComponent } from './community/community.component';
import { CoachComponent } from './coach/coach.component';
import { NutritionistComponent } from './nutritionist/nutritionist.component';
import { YogaComponent } from './yoga/yoga.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { OfferComponent } from './offer/offer.component';
import { AdminComponent } from './admin/admin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { BooknowComponent } from './booknow/booknow.component';
import { UsernutriComponent } from './usernutri/usernutri.component';
import { UseryogaComponent } from './useryoga/useryoga.component';
import { UsercoachComponent } from './usercoach/usercoach.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AuthGuard } from './auth.guard';
import { DeactivateGuard } from './deactivate.guard';
import { MailsComponent } from './mails/mails.component';
import { DetailsComponent } from './details/details.component';
import { PaymentComponent } from './payment/payment.component';
import { UpiComponent } from './upi/upi.component';
import { DebitComponent } from './debit/debit.component';
import { CreditComponent } from './credit/credit.component';
import { Offer1Component } from './offer1/offer1.component';
import { ActivateAdminGuard } from './activate-admin.guard';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { SignUppComponent } from './signUpp/signUpp.component';
import { FinalofferComponent } from './finaloffer/finaloffer.component';
import { ReviewPageComponent } from './reviewPage/reviewPage.component';
import { UpiTableComponent } from './upiTable/upiTable.component';
import { CreditTableComponent } from './creditTable/creditTable.component';
import { DebitTableComponent } from './debitTable/debitTable.component';
import { CapitalizeePipe } from './Capitalizee.pipe';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
 },
 {
  path:'admin',
  component:AdminComponent,
  canActivate:[ActivateAdminGuard]
 },
 {
  path:'',
  children:[{
    path:'admin/nutritionist',
    component:NutritionistComponent
  },
  {
    path:'admin/coach',
    component:CoachComponent
  },
{
  path:'admin/yoga',
  component:YogaComponent
},
{
  path:'admin/mails',
  component:MailsComponent
},
{
  path:'admin/details',
  component:DetailsComponent
},
{
  path:'admin/upiTable',
  component:UpiTableComponent
},
{
  path:'admin/creditTable',
  component:CreditTableComponent
},
{
  path:'admin/debitTable',
  component:DebitTableComponent
}
],
},
  {
    path:'NutriLogin',
    component:NutriLoginComponent,

  },
  {
    path:'',
    children:[{
      path:'NutriLogin/signup',
      component:SignUpComponent
    },
    {
      path:'NutriLogin/forgot',
      component:ForgotComponent
    },
    {
      path:'NutriLogin/forgot/confirm',
      component:ConfirmComponent
    },
    {
      path:'NutriLogin/forgot/confirm/registration',
      component:RegistrationComponent,
      canDeactivate:[DeactivateGuard]

    },
    {
      path:'NutriLogin',
    component:NutriLoginComponent
    }]
  },

  {
    path:'desserts',
    component:DessertsComponent,

  },
  {
    path:'salads',
    component:SaladsComponent,
  },
  {
     path:'gallery',
     component:GalleryComponent,
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'signupp',
    component:SignUppComponent
  },
  {
    path:'community',
    component:CommunityComponent,
  },
  {
    path:'cancellation',
    component:CancellationComponent,
  },
  {
    path:'finaloffer',
    component:FinalofferComponent,

  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'coach',
    component:CoachComponent
  },
  {
    path:'yoga',
    component:YogaComponent
  },
  {
    path:'nutritionist',
    component:NutritionistComponent
  },
  {
    path:'usernutri',
    component:UsernutriComponent,

  },
  {
    path:'reviewPage',
     component:ReviewPageComponent,
     canActivate:[AuthGuard]
  },
  {
    path:'useryoga',
    component:UseryogaComponent,

  },
  {
    path:'usercoach',
    component:UsercoachComponent,

  },
 {
  path:'navbar',
  component:NavbarComponent
 },
 {
  path:'footer',
  component:FooterComponent
 },
 {
  path:'offer1',
  component:Offer1Component,
 },
 {
  path:'',
  children:[{
    path:'offer1/payment',
    component:PaymentComponent,
  },
{
   path:'offer1/payment/upi',
   component:UpiComponent,
},
{
  path:'offer1/payment/credit',
  component:CreditComponent,
},
{
  path:'offer1/payment/debit',
  component:DebitComponent,
},
]
},
{
  path:'payment',
  component:PaymentComponent,
  canActivate:[AuthGuard]
},
{
  path:'',
  children:[{
    path:'payment/credit',
    component:CreditComponent,
  },
{
  path:'payment/debit',
    component:DebitComponent,
},
{
  path:'payment/upi',
  component:UpiComponent,
}]
},
{
  path:'registration',
  component:RegistrationComponent,
  canActivate:[AuthGuard],
  canDeactivate:[DeactivateGuard]
},
{
  path:'',
  children:[
    {
      path:'registration/thankyou',
      component:ThankyouComponent
    },
    {
      path:'',
      component:HomeComponent
    }
  ]
},
 {
  path:'',
  children:[
    {
      path:'offer/registration',
      component:RegistrationComponent,
  canDeactivate:[DeactivateGuard]

    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
      CapitalizeePipe
   ]
})
export class AppRoutingModule { }
