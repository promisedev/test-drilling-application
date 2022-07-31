import { AttachFile, CloudUploadOutlined, ExpandMore } from "@material-ui/icons"




const CmsArticle = ()=>{

    return(
        <article className='cms_videoform_cont'>
          <div className='cms_header'>Article</div>  
          <form className='cms_form'>
            <div className='cms_form_div'>
              <div className='cms_form_content'></div>
              <label htmlFor="cfile" className='cms_label'>
                <AttachFile/> 
            <input type='file' name='cfile' id="cfile"/>
              </label>  
            </div>
{/* ------------------------------------------------------- */}
<div className='cms_form_div'>
              <div className='cms_form_content'></div>
              <div className='cms_drop'><ExpandMore/></div> 
            </div>
{/* ------------------------------------------------------- */}
<div className='cms_form_div'>
              <input type='text' name='title' />
         </div>     
{/* ------------------------------------------------------- */}
<div className="cms_button" ><CloudUploadOutlined/>Upload</div>
          </form>

        </article>
    )
}

export default CmsArticle
