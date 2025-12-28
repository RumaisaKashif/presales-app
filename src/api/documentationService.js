import apiClient from './apiClient';

/**
 * DocumentationService handles API calls for managing presales documentation.
 */
const documentationService = {
  /**
   * Fetches all documentation.
   * @returns {Promise<any[]>} A list of documents.
   */
  getDocumentation: async () => {
    // Replace with your actual API endpoint
    return apiClient.get('/presales/documentation');
  },

  /**
   * Uploads a new document.
   * @param {FormData} formData - The form data containing the file.
   * @returns {Promise<any>} The response from the server.
   */
  uploadDocument: async (formData) => {
    // Replace with your actual API endpoint
    return apiClient.post('/presales/documentation/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default documentationService;
