import React from 'react';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">{t('privacy_title')}</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: August 05, 2025</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3 border-b pb-2">1. {t('privacy_intro')}</h2>
          <p>
            {t('privacy_intro_desc')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 border-b pb-2">2. {t('privacy_data_collection')}</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>{t('privacy_data_collection_desc_1')}</strong></li>
            <li><strong>{t('privacy_data_collection_desc_2')}</strong></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 border-b pb-2">3. {t('privacy_permissions_title')}</h2>
          <p className="mt-4 text-sm text-gray-600">
            {t('privacy_permissions_desc')}
          </p>
          <div className="overflow-x-auto shadow-md sm:rounded-lg mt-6">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">{t('permission')}</th>
                  <th scope="col" className="px-6 py-3">{t('mandatory_optional')}</th>
                  <th scope="col" className="px-6 py-3">{t('purpose')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-mono text-gray-900"><code>BLUETOOTH</code>, <code>BLUETOOTH_ADMIN</code>, <code>NEARBY_WIFI_DEVICES</code></td>
                  <td className="px-6 py-4"><strong>{t('mandatory')}</strong></td>
                  <td className="px-6 py-4">{t('detect_connect_nearby')}</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-6 py-4 font-mono text-gray-900"><code>ACCESS_FINE_LOCATION</code> / <code>ACCESS_COARSE_LOCATION</code></td>
                  <td className="px-6 py-4"><strong>{t('mandatory')}</strong></td>
                  <td className="px-6 py-4">{t('required_by_android')}</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-mono text-gray-900"><code>ACCESS_WIFI_STATE</code>, <code>CHANGE_WIFI_STATE</code></td>
                  <td className="px-6 py-4"><strong>{t('mandatory')}</strong></td>
                  <td className="px-6 py-4">{t('manage_wifi_direct')}</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-6 py-4 font-mono text-gray-900"><code>INTERNET</code></td>
                  <td className="px-6 py-4"><strong>{t('mandatory')}</strong></td>
                  <td className="px-6 py-4">{t('internal_app_functions')}</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-mono text-gray-900"><code>READ_EXTERNAL_STORAGE</code>, <code>WRITE_EXTERNAL_STORAGE</code></td>
                  <td className="px-6 py-4"><strong>{t('optional')}</strong></td>
                  <td className="px-6 py-4">{t('send_receive_files')}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-mono text-gray-900"><code>RECORD_AUDIO</code> <em>({t('only_if_voice_messages')})</em></td>
                  <td className="px-6 py-4"><strong>{t('optional')}</strong></td>
                  <td className="px-6 py-4">{t('capture_audio_clips')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 border-b pb-2">4. {t('privacy_data_handling_title')}</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>{t('privacy_data_handling_desc_1')}</strong></li>
            <li><strong>{t('privacy_data_handling_desc_2')}</strong></li>
            <li><strong>{t('privacy_data_handling_desc_3')}</strong></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 border-b pb-2">5. {t('privacy_gdpr_title')}</h2>
          <p>
            {t('privacy_gdpr_desc')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 border-b pb-2">6. {t('privacy_rights_title')}</h2>
          <p>
            {t('privacy_rights_desc')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 border-b pb-2">7. {t('privacy_changes_title')}</h2>
          <p>
            {t('privacy_changes_desc')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 border-b pb-2">8. {t('privacy_contact_title')}</h2>
          <p>
            {t('privacy_contact_desc')} <a href="mailto:pmietlicki@gmail.com" className="text-blue-600 hover:underline">pmietlicki@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
