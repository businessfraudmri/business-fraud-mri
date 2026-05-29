# Gmail Setup for Contact Form - Business Fraud MRI™

## ✅ Edge Function Updated

The contact form now uses Gmail SMTP instead of Resend!

### What You Need to Do:

**Add Your Gmail App Password to Supabase:**

Since you already have the app password named "BusinessFraudMRI", here's how to add it:

1. **Get Your App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Find the app password named "BusinessFraudMRI"
   - If you don't have it, create one:
     - App name: BusinessFraudMRI
     - Select: Mail
     - Device: Other (custom name)
     - Copy the 16-character password

2. **Add to Supabase:**
   - Go to: https://supabase.com/dashboard
   - Select your project
   - Navigate to: Edge Functions → Secrets
   - Click "Add new secret"
   - Name: `GMAIL_APP_PASSWORD`
   - Value: [paste your 16-character app password - NO spaces]
   - Click "Save"

3. **Verify Email (Optional):**
   - Secret Name: `GMAIL_EMAIL`
   - Value: `businessfraudmri@gmail.com`
   - (This is already default, so optional)

## How It Works Now:

### When Someone Submits the Form:

1. **Database Save** ✅
   - Submission saved to Supabase
   - Unique ID generated
   - Timestamp recorded

2. **Email to You** ✅ (when password configured)
   - From: businessfraudmri@gmail.com
   - To: businessfraudmri@gmail.com
   - Subject: "New Contact Form Submission: [Subject]"
   - Contains: Name, email, company, phone, message
   - Reply-To: User's email

3. **Auto-Reply to User** ✅ (when password configured)
   - From: businessfraudmri@gmail.com
   - To: User's email
   - Subject: "We received your message - Business Fraud MRI™"
   - Professional HTML email
   - 24-hour response promise

## Test It:

1. Add the `GMAIL_APP_PASSWORD` secret to Supabase
2. Go to your website's contact page
3. Submit a test message
4. Check:
   - ✅ Success message appears
   - ✅ Email arrives at businessfraudmri@gmail.com
   - ✅ Auto-reply sent to test email

## App Password Instructions:

### If You Already Have It:
1. Copy the existing password from your Google account
2. Add to Supabase as `GMAIL_APP_PASSWORD`

### If You Need to Create It:
1. Go to: https://myaccount.google.com/apppasswords
2. Sign in to Google
3. Click "Create new app password"
4. App name: BusinessFraudMRI
5. Select: Mail
6. Select device: Other (enter "BusinessFraudMRI Website")
7. Click "Create"
8. **Copy the 16-character password immediately**
9. Paste into Supabase secrets

## Format:
- The password looks like: `xyzw abcd efgh ijkl`
- Add it WITHOUT spaces: `xyzwabcdijklefgh`
- Just copy and paste directly

## Troubleshooting:

### Error: "Failed to send message"
- Check browser console for details
- Verify Supabase URL in `.env` file
- Check edge function logs in Supabase dashboard

### No Email Received:
- Verify `GMAIL_APP_PASSWORD` secret is set
- Check edge function logs for errors
- Verify 2FA is enabled on Google account
- Check spam folder

### Gmail App Password Not Working:
- Make sure 2-Factor Authentication is enabled
- Regenerate the app password
- Copy password without spaces
- Wait a few minutes after creating

## Current Status:

- ✅ Database: Saving submissions
- ✅ Edge Function: Updated with Gmail code
- ⚠️ Email Sending: Requires `GMAIL_APP_PASSWORD` secret
- ⚠️ Auto-Reply: Requires `GMAIL_APP_PASSWORD` secret

## Add the Secret Now:

**Option 1: Via Supabase Dashboard**
1. Go to Edge Functions → Secrets
2. Add: `GMAIL_APP_PASSWORD` = [your password without spaces]

**Option 2: Already Have It?**
Just add the password to Supabase and it will work immediately!

---

**Next Step:** Add your Gmail app password to Supabase secrets, then test the form!
